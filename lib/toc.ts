import type React from "react";
import { slugify } from "@/lib/utils";

export type TOCItemType = {
  title: React.ReactNode;
  url: string;
  depth: number;
};

/**
 * Extracts Table of Contents items from Sanity Portable Text body
 */
export function extractTocFromPortableText(body: any[]): TOCItemType[] {
  if (!Array.isArray(body)) return [];
  const items: TOCItemType[] = [];

  body.forEach((block) => {
    if (block._type === "block" && ["h2", "h3", "h4"].includes(block.style)) {
      const text = block.children?.map((c: any) => c.text || "").join("").trim();
      if (text) {
        const depth = block.style === "h2" ? 2 : block.style === "h3" ? 3 : 4;
        const id = slugify(text);
        items.push({
          title: text,
          url: `#${id}`,
          depth,
        });
      }
    }
  });

  return items;
}
