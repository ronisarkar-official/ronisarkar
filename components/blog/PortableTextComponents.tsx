import type { PortableTextComponents } from '@portabletext/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { getYouTubeId } from '@/lib/youtube'
import { slugify } from '@/lib/utils'
import { LinkPreview } from '@/components/ui/link-preview'

const CodeBlock = dynamic(() => import('@/components/blog/CodeBlock'), {
  loading: () => <div className="my-6 h-28 animate-pulse rounded-lg bg-zinc-800" />,
  ssr: true,
})

export const portableTextComponents: PortableTextComponents = {
  types: {
    youtube: ({ value }: any) => {
      const videoId = getYouTubeId(value?.url)
      if (!videoId) return null

      return (
        <figure className="my-8 overflow-hidden rounded-lg border border-border bg-card">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={value?.title || 'YouTube video'}
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
          {value?.title && (
            <figcaption className="border-t border-border px-4 py-2 text-center text-sm text-muted-foreground">
              {value.title}
            </figcaption>
          )}
        </figure>
      )
    },
    image: ({ value }: any) => {
      if (!value?.asset) return null

      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || 'Blog post image'}
            width={1200}
            height={675}
            className="rounded-lg"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
    code: ({ value }: any) => {
      if (!value) return null
      return <CodeBlock value={value} />
    },
  },
  block: {
    h2: ({ value, children }: any) => {
      const text = value?.children
        ? value.children.map((c: any) => c.text || '').join('')
        : Array.isArray(children)
          ? children.join('')
          : typeof children === 'string'
            ? children
            : ''
      const id = slugify(text)
      return (
        <h2 id={id || undefined} className="mb-3 mt-8 text-xl sm:text-2xl font-semibold tracking-tight text-foreground scroll-mt-24">
          {children}
        </h2>
      )
    },
    h3: ({ value, children }: any) => {
      const text = value?.children
        ? value.children.map((c: any) => c.text || '').join('')
        : Array.isArray(children)
          ? children.join('')
          : typeof children === 'string'
            ? children
            : ''
      const id = slugify(text)
      return (
        <h3 id={id || undefined} className="mb-2.5 mt-6 text-lg sm:text-xl font-medium tracking-tight text-foreground scroll-mt-24">
          {children}
        </h3>
      )
    },
    h4: ({ value, children }: any) => {
      const text = value?.children
        ? value.children.map((c: any) => c.text || '').join('')
        : Array.isArray(children)
          ? children.join('')
          : typeof children === 'string'
            ? children
            : ''
      const id = slugify(text)
      return (
        <h4 id={id || undefined} className="mb-2 mt-4 text-base sm:text-lg font-medium tracking-tight text-foreground scroll-mt-24">
          {children}
        </h4>
      )
    },
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-primary/60 pl-4 italic text-muted-foreground text-[15px] leading-relaxed">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-7 text-foreground/80">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-1.5 text-foreground/90">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-1.5 text-foreground/90">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-7">{children}</li>,
    number: ({ children }) => <li className="leading-7">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-muted/70 px-1.5 py-0.5 text-xs sm:text-sm font-mono text-foreground border border-border/40">
        {children}
      </code>
    ),
    underline: ({ children }) => <u className="underline underline-offset-4">{children}</u>,
    'strike-through': ({ children }) => (
      <s className="line-through text-muted-foreground">{children}</s>
    ),
    link: ({ value, children }: any) => {
      const href = value?.href
      if (!href) return <>{children}</>

      const target = value?.blank !== false ? '_blank' : undefined
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined

      const isExternalWeb = /^https?:\/\//i.test(href)

      if (!isExternalWeb) {
        return (
          <a
            href={href}
            target={target}
            rel={rel}
            className="text-primary underline-offset-4 hover:underline"
          >
            {children}
          </a>
        )
      }

      const previewImg =
        value?.previewImageUrl ||
        (value?.previewImage?.asset ? urlFor(value.previewImage).url() : undefined)

      if (previewImg) {
        return (
          <LinkPreview
            url={href}
            isStatic={true}
            imageSrc={previewImg}
            target={target}
            rel={rel}
            className="text-primary underline-offset-4 hover:underline font-medium inline"
          >
            {children}
          </LinkPreview>
        )
      }

      return (
        <LinkPreview
          url={href}
          target={target}
          rel={rel}
          className="text-primary underline-offset-4 hover:underline font-medium inline"
        >
          {children}
        </LinkPreview>
      )
    },
  },
}
