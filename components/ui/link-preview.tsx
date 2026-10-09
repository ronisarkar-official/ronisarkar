"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { encode } from "qss";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
  target?: string;
  rel?: string;
  showDomain?: boolean;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

const ogCache = new Map<string, string | null>();
const pendingFetches = new Map<string, Promise<string | null>>();

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
  target,
  rel,
  showDomain = false,
}: LinkPreviewProps) => {
  const { resolvedTheme } = useTheme();
  const [isOpen, setOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [resolvedSrc, setResolvedSrc] = React.useState<string | null>(() => {
    if (isStatic) return imageSrc;
    if (ogCache.has(url)) return ogCache.get(url) || null;
    return null;
  });
  const [isFetched, setIsFetched] = React.useState<boolean>(() => {
    if (isStatic) return true;
    return ogCache.has(url);
  });
  const [isImageLoading, setIsImageLoading] = React.useState(true);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Inverted: When website is in dark mode, request light screenshot; when light mode, request dark screenshot
  const screenshotTheme = isMounted && resolvedTheme === "dark" ? "light" : "dark";

  const fallbackScreenshotSrc = React.useMemo(() => {
    if (isStatic) return imageSrc;
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: screenshotTheme,
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    return `https://api.microlink.io/?${params}`;
  }, [isStatic, imageSrc, url, screenshotTheme, width, height]);

  React.useEffect(() => {
    if (isStatic) {
      setResolvedSrc(imageSrc);
      setIsFetched(true);
      return;
    }

    if (!url) return;

    if (ogCache.has(url)) {
      const cached = ogCache.get(url);
      setResolvedSrc(cached || fallbackScreenshotSrc);
      setIsFetched(true);
      return;
    }

    let isCancelled = false;

    const fetchOgImage = async () => {
      try {
        let fetchPromise = pendingFetches.get(url);
        if (!fetchPromise) {
          fetchPromise = fetch(`/api/link-preview?url=${encodeURIComponent(url)}`)
            .then(async (res) => {
              if (!res.ok) return null;
              const data = await res.json();
              return data?.image || null;
            })
            .catch(() => null);
          pendingFetches.set(url, fetchPromise);
        }

        const ogImage = await fetchPromise;
        ogCache.set(url, ogImage);

        if (!isCancelled) {
          setResolvedSrc(ogImage || fallbackScreenshotSrc);
          setIsFetched(true);
        }
      } catch {
        if (!isCancelled) {
          ogCache.set(url, null);
          setResolvedSrc(fallbackScreenshotSrc);
          setIsFetched(true);
        }
      } finally {
        pendingFetches.delete(url);
      }
    };

    fetchOgImage();

    return () => {
      isCancelled = true;
    };
  }, [url, isStatic, imageSrc, fallbackScreenshotSrc]);

  const displaySrc = isStatic ? imageSrc : (resolvedSrc || (isFetched ? fallbackScreenshotSrc : null));

  const domain = React.useMemo(() => {
    try {
      return new URL(url).hostname.replace(/^www\./, "");
    } catch {
      return url;
    }
  }, [url]);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Subtle parallax effect
    x.set(offsetFromCenter);
  };

  React.useEffect(() => {
    if (isMounted && displaySrc && typeof window !== 'undefined') {
      const img = new window.Image();
      img.src = displaySrc;
    }
  }, [isMounted, displaySrc]);

  return (
    <>
      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-foreground hover:text-primary transition-colors cursor-pointer", className)}
          href={url}
          target={target}
          rel={rel}
        >
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Portal>
          <HoverCardPrimitive.Content
            className="z-50 origin-(--radix-hover-card-content-transform-origin)"
            side="top"
            align="center"
            sideOffset={10}
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 280,
                      damping: 22,
                    },
                  }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  style={{
                    x: translateX,
                  }}
                >
                  {/* Swapped theme: Dark theme in light mode, Light theme in dark mode */}
                  <a
                    href={url}
                    target={target}
                    rel={rel}
                    style={{ width: `${width}px` }}
                    className="group block p-1.5 rounded-xl border border-neutral-800 bg-neutral-950/95 text-neutral-100 shadow-2xl shadow-black/60 backdrop-blur-md transition-[border-color,box-shadow] duration-200 hover:border-neutral-700 dark:border-neutral-200 dark:bg-white/95 dark:text-neutral-900 dark:shadow-xl dark:shadow-black/15 dark:hover:border-neutral-300"
                  >
                    <div
                      className="relative overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 dark:bg-neutral-100 dark:border-neutral-200"
                      style={{ height: `${height}px` }}
                    >
                      {displaySrc ? (
                        <img
                          src={displaySrc}
                          width={width}
                          height={height}
                          onLoad={() => setIsImageLoading(false)}
                          onError={() => {
                            if (displaySrc !== fallbackScreenshotSrc) {
                              ogCache.set(url, null);
                              setResolvedSrc(fallbackScreenshotSrc);
                            }
                          }}
                          className={cn(
                            "w-full h-full object-cover rounded-lg outline -outline-offset-1 outline-white/10 dark:outline-black/10 transition-opacity duration-200",
                            isImageLoading ? "opacity-0" : "opacity-100"
                          )}
                          alt={`${domain} preview`}
                        />
                      ) : null}

                      {(!displaySrc || isImageLoading) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/40 dark:bg-neutral-100/40 animate-pulse">
                          <div className="w-4 h-4 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                        </div>
                      )}
                    </div>
                    {showDomain && (
                      <div className="pt-1.5 px-1 pb-0.5 flex items-center justify-between gap-1 text-[11px] font-medium text-neutral-400 dark:text-neutral-500 truncate">
                        <span className="truncate">{domain}</span>
                      </div>
                    )}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Portal>
      </HoverCardPrimitive.Root>
    </>
  );
};
