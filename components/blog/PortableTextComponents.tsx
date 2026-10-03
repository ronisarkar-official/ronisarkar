import type { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { getYouTubeId } from '@/lib/youtube'
import { slugify } from '@/lib/utils'

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

      return (
        <div className="my-6">
          {value.filename && (
            <div className="rounded-t-lg bg-zinc-800 px-4 py-2 text-sm text-zinc-300">
              {value.filename}
            </div>
          )}
          <SyntaxHighlighter
            language={value.language || 'javascript'}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: value.filename ? '0 0 0.5rem 0.5rem' : '0.5rem',
              fontSize: '0.9rem',
            }}
            showLineNumbers
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      )
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
        <h2 id={id || undefined} className="mb-4 mt-8 text-3xl font-bold scroll-mt-24">
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
        <h3 id={id || undefined} className="mb-3 mt-6 text-2xl font-semibold scroll-mt-24">
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
        <h4 id={id || undefined} className="mb-2 mt-4 text-xl font-semibold scroll-mt-24">
          {children}
        </h4>
      )
    },
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-7">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-7">{children}</li>,
    number: ({ children }) => <li className="leading-7">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm font-mono text-zinc-200">
        {children}
      </code>
    ),
    underline: ({ children }) => <u className="underline">{children}</u>,
    'strike-through': ({ children }) => (
      <s className="line-through">{children}</s>
    ),
    link: ({ value, children }) => {
      const target = value?.blank ? '_blank' : undefined
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined

      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-primary underline-offset-4 hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}
