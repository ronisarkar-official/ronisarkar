import { NextRequest, NextResponse } from 'next/server';

function isPrivateIp(hostname: string): boolean {
  if (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '0.0.0.0' ||
    hostname === '::1' ||
    hostname.endsWith('.local')
  ) {
    return true;
  }

  // IPv4 private ranges
  const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  const match = hostname.match(ipv4Regex);
  if (match) {
    const octets = match.slice(1).map(Number);
    if (octets[0] === 10) return true;
    if (octets[0] === 127) return true;
    if (octets[0] === 169 && octets[1] === 254) return true;
    if (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31) return true;
    if (octets[0] === 192 && octets[1] === 168) return true;
  }

  return false;
}

function extractOgImage(html: string, baseUrl: string): string | null {
  const patterns = [
    /<meta\s+[^>]*?(?:property|name)=["']og:image(?::url|:secure_url)?["'][^>]*?content=["']([^"']+)["']/i,
    /<meta\s+[^>]*?content=["']([^"']+)["'][^>]*?(?:property|name)=["']og:image(?::url|:secure_url)?["']/i,
    /<meta\s+[^>]*?(?:property|name)=["']twitter:image(?::src)?["'][^>]*?content=["']([^"']+)["']/i,
    /<meta\s+[^>]*?content=["']([^"']+)["'][^>]*?(?:property|name)=["']twitter:image(?::src)?["']/i,
    /<link\s+[^>]*?rel=["']image_src["'][^>]*?href=["']([^"']+)["']/i,
    /<link\s+[^>]*?href=["']([^"']+)["'][^>]*?rel=["']image_src["']/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      try {
        const decoded = match[1].replace(/&amp;/g, '&').trim();
        if (decoded) {
          return new URL(decoded, baseUrl).href;
        }
      } catch {
        // Continue to next pattern if URL resolution fails
      }
    }
  }

  return null;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return NextResponse.json(
      { error: 'Missing "url" parameter', image: null },
      { status: 400 }
    );
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(targetUrl);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
      return NextResponse.json(
        { error: 'Invalid URL protocol', image: null },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: 'Invalid URL', image: null },
      { status: 400 }
    );
  }

  if (isPrivateIp(parsedUrl.hostname)) {
    return NextResponse.json(
      { error: 'Access to private addresses is forbidden', image: null },
      { status: 403 }
    );
  }

  try {
    // Attempt direct HTML fetch with a 4s timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const response = await fetch(targetUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    clearTimeout(timeoutId);

    const contentType = response.headers.get('content-type') || '';

    // If target URL is directly an image
    if (contentType.startsWith('image/')) {
      return NextResponse.json(
        { image: targetUrl },
        {
          headers: {
            'Cache-Control':
              'public, s-maxage=86400, stale-while-revalidate=604800',
          },
        }
      );
    }

    if (response.ok) {
      const html = await response.text();
      const ogImage = extractOgImage(html, targetUrl);

      if (ogImage) {
        return NextResponse.json(
          { image: ogImage },
          {
            headers: {
              'Cache-Control':
                'public, s-maxage=86400, stale-while-revalidate=604800',
            },
          }
        );
      }
    }
  } catch {
    // Direct fetch failed (e.g. timeout, network block)
  }

  // Fallback: try Microlink metadata extraction as secondary source
  try {
    const microController = new AbortController();
    const microTimeout = setTimeout(() => microController.abort(), 3000);

    const microRes = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(targetUrl)}`,
      {
        signal: microController.signal,
        headers: {
          Accept: 'application/json',
        },
      }
    );

    clearTimeout(microTimeout);

    if (microRes.ok) {
      const data = await microRes.json();
      const microImage = data?.data?.image?.url;
      if (microImage) {
        return NextResponse.json(
          { image: microImage },
          {
            headers: {
              'Cache-Control':
                'public, s-maxage=86400, stale-while-revalidate=604800',
            },
          }
        );
      }
    }
  } catch {
    // Microlink fallback also failed or timed out
  }

  // No OpenGraph image found
  return NextResponse.json(
    { image: null },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    }
  );
}
