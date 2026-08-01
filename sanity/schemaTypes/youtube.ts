import { defineType } from 'sanity'
import { getYouTubeId } from '@/lib/youtube'
import { YouTubePreview } from '../components/YouTubePreview'

export default defineType({
  name: 'youtube',
  title: 'YouTube Video',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'Paste a YouTube link (youtube.com or youtu.be)',
      validation: (Rule) =>
        Rule.uri({ scheme: ['http', 'https'] }).custom((value) => {
          const url = typeof value === 'string' ? value : undefined
          if (!url) return true
          return getYouTubeId(url) ? true : 'Must be a valid YouTube video URL'
        }),
    },
    {
      name: 'title',
      title: 'Video Title',
      type: 'string',
      description: 'Optional accessible title shown under the video',
    },
  ],
  components: {
    preview: YouTubePreview,
  },
  preview: {
    select: {
      url: 'url',
      title: 'title',
    },
  },
})
