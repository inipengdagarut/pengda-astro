import { z, defineCollection } from 'astro:content';

const beritaPostCollections = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        postDate: z.string().transform(str => new Date(str)),
        author: z.string().default('Redaksi'),
        coverImage: image().optional(),
        draft: z.boolean(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
})

const artikelPostCollections = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        postDate: z.string().transform(str => new Date(str)),
        author: z.string().default('Redaksi'),
        coverImage: image().optional(),
        draft: z.boolean(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
})

const pengumumanCollections = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        postDate: z.string().transform(str => new Date(str)),
        author: z.string().default('Pengda I.N.I Kab.Garut'),
        coverImage: image().optional(),
        draft: z.boolean().optional(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
})


const galleryItemCollections = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        title: z.string(),
        postDate: z.string().transform(str => new Date(str)),
        uploader: z.string().default('Redaksi'),
        imgSrc: image(),
        caption: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
})


export const collections = {
    'berita': beritaPostCollections,
    'artikel': artikelPostCollections,
    'galeri': galleryItemCollections,
    'pengumuman': pengumumanCollections,
}