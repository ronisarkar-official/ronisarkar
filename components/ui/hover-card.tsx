"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { HoverCard as HoverCardPrimitive } from "radix-ui"

function HoverCard({
  openDelay = 0,
  closeDelay = 150,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return (
    <HoverCardPrimitive.Root
      data-slot="hover-card"
      openDelay={openDelay}
      closeDelay={closeDelay}
      {...props}
    />
  )
}

function HoverCardTrigger({
  render,
  children,
  delay,
  closeDelay,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger> & {
  render?: React.ReactElement
  delay?: number
  closeDelay?: number
}) {
  if (render) {
    return (
      <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" asChild {...props}>
        {React.cloneElement(render, undefined, children ?? (render.props as { children?: React.ReactNode }).children)}
      </HoverCardPrimitive.Trigger>
    )
  }
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props}>
      {children}
    </HoverCardPrimitive.Trigger>
  )
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
