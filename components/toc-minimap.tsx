"use client"

import { useEffect, useMemo, useState } from "react"

import { cn, slugify } from "@/lib/utils"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { type TOCItemType, extractTocFromPortableText } from "@/lib/toc"
export { type TOCItemType, extractTocFromPortableText }

export type TOCMinimapProps = {
  /** @fumadocsHref #tocitemtype */
  items?: TOCItemType[]
  className?: string
}

export function TOCMinimap({ items: propItems, className }: TOCMinimapProps) {
  const [scannedItems, setScannedItems] = useState<TOCItemType[]>([])

  useEffect(() => {
    if (propItems && propItems.length > 0) return

    // Scan article headings if items not provided
    const article = document.querySelector("article") || document.querySelector("main")
    if (!article) return

    const headings = article.querySelectorAll("h2, h3, h4")
    const extracted: TOCItemType[] = []

    headings.forEach((el) => {
      const text = el.textContent?.trim() || ""
      if (!text) return

      let id = el.id
      if (!id) {
        id = slugify(text)
        el.id = id
      }

      const depth = parseInt(el.tagName.replace("H", ""), 10)
      extracted.push({
        title: text,
        url: `#${id}`,
        depth,
      })
    })

    if (extracted.length > 0) {
      setScannedItems(extracted)
    }
  }, [propItems])

  const effectiveItems = (propItems && propItems.length > 0) ? propItems : scannedItems

  const itemIds = useMemo(
    () => effectiveItems.map((item) => item.url.replace("#", "")),
    [effectiveItems]
  )

  const activeHeading = useActiveHeading(itemIds)

  if (!effectiveItems.length) {
    return null
  }

  return (
    <div className={cn("ml-auto w-18", className)}>
      <HoverCard
        openDelay={0}
        closeDelay={150}
      >
        <HoverCardTrigger
          render={
            <div
              className="group/minimap flex max-h-[50dvh] flex-col gap-2.5 overflow-hidden py-3 pl-4 pr-1 opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer select-none"
              aria-label="Table of Contents Minimap"
            >
              {effectiveItems.map((item) => {
                const isActive = item.url === `#${activeHeading}`
                return (
                  <div
                    key={item.url}
                    data-depth={item.depth}
                    data-active={isActive}
                    className={cn(
                      "h-0.5 rounded-full bg-muted-foreground/30 transition-all duration-200",
                      item.depth === 2 && "w-6",
                      item.depth === 3 && "ml-2 w-4",
                      item.depth >= 4 && "ml-4 w-2.5",
                      isActive && "bg-foreground w-8 h-1 shadow-xs data-[active=true]:bg-foreground"
                    )}
                  />
                )
              })}
            </div>
          }
        />

        <HoverCardContent
          className="w-64 max-w-[85vw] overflow-hidden p-0 duration-200 border border-border/80 bg-popover/95 backdrop-blur-md rounded-xl shadow-xl data-[side=left]:slide-in-from-right-3 data-[side=left]:slide-out-to-right-3 data-open:zoom-in-100 data-closed:zoom-out-100"
          align="start"
          alignOffset={-4}
          side="left"
          sideOffset={-50}
        >
          <div className="flex max-h-[50dvh] flex-col overflow-y-auto overscroll-contain">
            <div className="border-b border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 ">
              Table of Contents
            </div>
            <ul className="flex size-full flex-col px-3 py-2 text-sm">
              {effectiveItems.map((item) => {
                const isActive = item.url === `#${activeHeading}`
                return (
                  <li key={item.url} className="flex py-0.5">
                    <a
                      href={item.url}
                      data-depth={item.depth}
                      data-active={isActive}
                      className={cn(
                        "line-clamp-2 w-full rounded-md px-2.5 py-1.5 text-xs transition-colors duration-150",
                        "text-muted-foreground hover:bg-accent/60 hover:text-foreground",
                        isActive && "bg-accent text-foreground font-medium",
                        item.depth === 3 && "pl-4",
                        item.depth >= 4 && "pl-7"
                      )}
                      onClick={handleItemClick}
                    >
                      {item.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

export function useActiveHeading(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(itemIds[0] ?? null)

  useEffect(() => {
    if (!itemIds || itemIds.length === 0) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140

      let currentId = itemIds[0] || null
      for (const id of itemIds) {
        const element = document.getElementById(id)
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY
          if (top <= scrollPosition) {
            currentId = id
          }
        }
      }
      setActiveId(currentId)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [itemIds])

  return activeId
}

function handleItemClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  const url = e.currentTarget.getAttribute("href") ?? ""
  scrollToHeading(url)
}

function scrollToHeading(url: string) {
  history.pushState(null, "", url)
  const id = url.replace("#", "")
  const element = document.getElementById(id)
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({
      top,
      behavior: "smooth",
    })
  }
}

export default TOCMinimap
