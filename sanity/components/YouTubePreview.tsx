import type { PreviewComponent } from 'sanity'
import { getYouTubeId } from '@/lib/youtube'

interface YouTubePreviewValue {
  url?: string
  title?: string
}

export const YouTubePreview: PreviewComponent = (props: any) => {
  const fallbackValue = (props?.value as YouTubePreviewValue | undefined) ?? {}
  const url = props?.url ?? fallbackValue.url
  const title = props?.title ?? fallbackValue.title

  const videoId = getYouTubeId(url)

  if (!videoId) {
    return (
      <div className="p-3 text-sm text-muted-foreground">
        Enter a valid YouTube URL to see the preview
      </div>
    )
  }

  return (
    <div className="p-2">
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt={title || 'YouTube video preview'}
        className="w-full rounded-md block aspect-video object-cover"
      />
      {title && (
        <p className="mt-1.5 text-xs text-muted-foreground text-center">
          {title}
        </p>
      )}
    </div>
  )
}
