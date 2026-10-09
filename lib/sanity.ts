import { cache } from 'react'
import { client } from '@/sanity/lib/client'
import { PostCard, SanityPost } from '@/types/sanity.types'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/**
 * Calculate reading time based on Portable Text content
 */
function calculateReadingTime(body: any[]): string {
  const wordsPerMinute = 200
  let wordCount = 0

  body?.forEach((block) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child: any) => {
        if (child.text) {
          wordCount += child.text.split(/\s+/).length
        }
      })
    }
  })

  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `${minutes} min read`
}

/**
 * Fetch all published posts
 */
export const getAllSanityPosts = cache(async (): Promise<PostCard[]> => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    author->{
      name,
      "image": image.asset->url
    },
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt
    },
    categories[]->{
      title,
      "slug": slug.current,
      color
    },
    featured,
    views
  }`

  try {
    const posts = await client.fetch(query, {}, { next: { revalidate: 60 } })
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
})

/**
 * Fetch a single post by slug
 */
export const getSanityPostBySlug = cache(async (
  slug: string
): Promise<SanityPost | null> => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    _updatedAt,
    title,
    slug,
    author->{
      _id,
      name,
      "slug": slug.current,
      image,
      bio,
      social
    },
    mainImage,
    categories[]->{
      _id,
      title,
      "slug": slug.current,
      description,
      color
    },
    publishedAt,
    excerpt,
    body[]{
      ...,
      markDefs[]{
        ...,
        _type == "link" => {
          ...,
          "previewImageUrl": previewImage.asset->url
        }
      }
    },
    seo,
    featured,
    views
  }`

  try {
    const post = await client.fetch(query, { slug }, { next: { revalidate: 60 } })
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
})

/**
 * Fetch featured posts
 */
export const getFeaturedPosts = cache(async (limit = 3): Promise<PostCard[]> => {
  const query = `*[_type == "post" && featured == true] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    author->{
      name,
      "image": image.asset->url
    },
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt
    },
    categories[]->{
      title,
      "slug": slug.current,
      color
    },
    featured,
    views
  }`

  try {
    const posts = await client.fetch(query, {}, { next: { revalidate: 60 } })
    return posts
  } catch (error) {
    console.error('Error fetching featured posts:', error)
    return []
  }
})

/**
 * Fetch posts by category
 */
export async function getPostsByCategory(
  categorySlug: string
): Promise<PostCard[]> {
  const query = `*[_type == "post" && references(*[_type=="category" && slug.current == $categorySlug]._id)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    author->{
      name,
      "image": image.asset->url
    },
    "mainImage": {
      "url": mainImage.asset->url,
      "alt": mainImage.alt
    },
    categories[]->{
      title,
      "slug": slug.current,
      color
    },
    featured,
    views
  }`

  try {
    const posts = await client.fetch(query, { categorySlug })
    return posts
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}

/**
 * Get all post slugs for static generation
 */
export const getAllPostSlugs = cache(async (): Promise<string[]> => {
  const query = `*[_type == "post"].slug.current`

  try {
    const slugs = await client.fetch(query, {}, { next: { revalidate: 60 } })
    return slugs
  } catch (error) {
    console.error('Error fetching slugs:', error)
    return []
  }
})

/**
 * Get all categories
 */
export const getAllCategories = cache(async () => {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    color,
    "postCount": count(*[_type == "post" && references(^._id)])
  }`

  try {
    const categories = await client.fetch(query, {}, { next: { revalidate: 60 } })
    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
})

/**
 * Get site settings (singleton document)
 */
export async function getSiteSettings() {
  const query = `*[_type == "settings"][0] {
    _id,
    resumeUrl,
    "heroImages": heroImages[]{
      "url": asset->url,
      alt
    },
    rotatingTitles,
    email,
    websiteUrl,
    aboutContent[]{
      ...,
      markDefs[]{
        ...,
        _type == "link" => {
          ...,
          "previewImageUrl": previewImage.asset->url
        }
      }
    }
  }`

  try {
    const settings = await client.fetch(query, {}, { next: { revalidate: 300 } })
    return settings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return null
  }
}

export { calculateReadingTime }

// Award/Certification type
export interface Award {
  _id: string
  title: string
  prize: string
  grade: string
  date: string
  description?: any[]
  icon?: string
  pinned?: boolean
  order?: number
  imageUrl?: string
  thumbnailUrl?: string
  modalUrl?: string
  blurDataUrl?: string
  image?: {
    alt?: string
  }
}

/**
 * Fetch all awards/certifications ordered by display order, then date
 */
export async function getAwards(): Promise<Award[]> {
  const query = `*[_type == "certification"] | order(order asc, date desc) {
    _id,
    title,
    prize,
    grade,
    date,
    description,
    icon,
    pinned,
    order,
    "imageUrl": image.asset->url,
    "thumbnailUrl": image.asset->url + "?w=800&auto=format&q=80",
    "modalUrl": image.asset->url + "?w=1200&auto=format&q=85",
    "blurDataUrl": image.asset->metadata.lqip,
    image {
      alt
    }
  }`

  try {
    const awards = await client.fetch(query, {}, { next: { revalidate: 60 } })
    return awards
  } catch (error) {
    console.error('Error fetching awards:', error)
    return []
  }
}

