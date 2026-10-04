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
}: LinkPreviewProps) => {
  const { resolvedTheme } = useTheme();
  const [isOpen, setOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Inverted: When website is in dark mode, request light screenshot; when light mode, request dark screenshot
  const screenshotTheme = isMounted && resolvedTheme === "dark" ? "light" : "dark";

  let src;
  if (!isStatic) {
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
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

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

  const handleMouseMove = (event: any) => {
    const targetRect = event.target.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Subtle parallax effect
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <span className="hidden" aria-hidden="true">
          <img
            src={src}
            width={width}
            height={height}
            alt="hidden image"
          />
        </span>
      ) : null}

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
                      <img
                        src={isStatic ? imageSrc : src}
                        width={width}
                        height={height}
                        className="w-full h-full object-cover rounded-lg outline -outline-offset-1 outline-white/10 dark:outline-black/10"
                        alt={`${domain} preview`}
                      />
                    </div>
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
