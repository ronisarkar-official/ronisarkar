/**
 * Extract a YouTube video ID from various URL formats:
 * youtube.com/watch?v=..., youtu.be/..., /shorts/, /embed/, /live/, /v/
 */
export function getYouTubeId(url?: string | null): string | null {
  if (!url) return null

  const patterns = [
    /youtube\.com\/watch\?[^#]*\bv=([A-Za-z0-9_-]{11})/,
    /youtube\.com\/(?:embed|shorts|live|v)\/([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}
