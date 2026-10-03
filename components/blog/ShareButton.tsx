"use client";

import { ShareMenu } from "@/components/share-menu";

interface ShareButtonProps {
  title: string;
  slug: string;
}

export default function ShareButton({ title, slug }: ShareButtonProps) {
  return <ShareMenu title={title} slug={slug} showLabel />;
}

