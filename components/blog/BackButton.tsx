import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  className?: string;
  href?: string;
  label?: string;
}

export default function BackButton({
  className,
  href = "/blog",
  label = "Back to blogs",
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        className
      )}
    >
      <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      {label}
    </Link>
  );
}
