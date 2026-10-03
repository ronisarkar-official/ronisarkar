"use client"

import * as React from "react"
import { EllipsisIcon, LinkIcon, ShareIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export type ShareMenuProps = {
  /** Title passed to the native share sheet and social posts. */
  title: string
  /** URL to share. Relative URLs are resolved against the current origin. */
  url?: string
  /** Optional slug shortcut (used to resolve /blog/[slug]). */
  slug?: string
  /** Whether to show the text label "Share" alongside the icon. Defaults to false. */
  showLabel?: boolean
  /** Alignment of the dropdown menu content. Defaults to "end". */
  align?: "start" | "center" | "end"
  /** Optional additional classes for the trigger button. */
  className?: string
  /** Optional custom trigger element. */
  children?: React.ReactNode
}

export function ShareMenu({
  title,
  url,
  slug,
  showLabel = false,
  align = "end",
  className,
  children,
}: ShareMenuProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Resolve share URL
  const targetUrl = url || (slug ? `/blog/${slug}` : "")
  const absoluteUrl = targetUrl.startsWith("http")
    ? targetUrl
    : typeof window !== "undefined"
      ? new URL(targetUrl || window.location.pathname, window.location.origin).toString()
      : targetUrl

  const urlEncoded = encodeURIComponent(absoluteUrl)
  const textEncoded = encodeURIComponent(title)

  const handleCopy = async () => {
    const success = await copyText(absoluteUrl)
    if (success) {
      toast.success("Link copied to clipboard")
    } else {
      toast.error("Failed to copy link")
    }
  }

  const hasNativeShare =
    mounted && typeof navigator !== "undefined" && typeof navigator.share === "function"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          children ? (
            <>{children}</>
          ) : (
            <Button
              variant="outline"
              size={showLabel ? "sm" : "icon-sm"}
              className={cn(
                "rounded-full transition-colors cursor-pointer",
                showLabel ? "h-8 gap-2 px-3 text-xs" : "h-8 w-8 p-0",
                className
              )}
            />
          )
        }
      >
        {!children && (
          <>
            <ShareIcon className="h-3.5 w-3.5" />
            {showLabel && <span>Share</span>}
          </>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-48 p-1.5 shadow-lg border border-border/80 bg-popover/95 backdrop-blur-md rounded-xl"
        align={align}
        alignOffset={-4}
        collisionPadding={16}
      >
        <DropdownMenuItem
          onClick={handleCopy}
          className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium cursor-pointer transition-colors"
        >
          <LinkIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>Copy link</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          render={
            <a
              href={`https://x.com/intent/tweet?url=${urlEncoded}&text=${textEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium cursor-pointer transition-colors"
            />
          }
        >
          <XIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>Share on X</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          render={
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${urlEncoded}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium cursor-pointer transition-colors"
            />
          }
        >
          <LinkedInIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          <span>Share on LinkedIn</span>
        </DropdownMenuItem>

        {hasNativeShare && (
          <DropdownMenuItem
            closeOnClick={false}
            onClick={() => {
              navigator.share({ title, url: absoluteUrl }).catch(() => {})
            }}
            className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium cursor-pointer transition-colors"
          >
            <EllipsisIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span>Other apps</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const copyText = async (text: string): Promise<boolean> => {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
    // Fallback for older browsers or non-secure contexts
    const textArea = document.createElement("textarea")
    textArea.value = text
    textArea.style.position = "fixed"
    textArea.style.opacity = "0"
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    const successful = document.execCommand("copy")
    document.body.removeChild(textArea)
    return successful
  } catch {
    return false
  }
}

type IconProps = React.ComponentProps<"svg">

function XIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="m22.991 23-8.533-12.612L22.42 1h-2.77l-6.422 7.575L8.105 1H1.123l8.225 12.158L1 23h2.77l6.81-8.03L16.015 23H23zM7.193 2.769l12.49 18.462h-2.76L4.43 2.769z" />
    </svg>
  )
}

function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M22.274 0H1.728C.692 0 0 .685 0 1.715v20.569C0 23.316.864 24 1.727 24h20.546C23.31 24 24 23.315 24 22.285V1.716C24.001.684 23.31 0 22.274 0M7.08 20.4H3.454V8.915h3.625zM5.352 7.371c-1.209 0-2.07-.856-2.07-2.056s.863-2.059 2.07-2.059c1.21 0 2.073.859 2.073 2.059S6.388 7.37 5.352 7.37M20.548 20.4h-3.626v-5.485c0-1.371 0-3.087-1.9-3.087-1.898 0-2.073 1.372-2.073 2.916V20.4H9.325V8.915h3.454v1.541c.69-1.2 2.073-1.885 3.453-1.885 3.627 0 4.316 2.4 4.316 5.485z" />
    </svg>
  )
}

export default ShareMenu
