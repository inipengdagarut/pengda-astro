interface Link {
    title: string
    href: string
    desc?:string
}

export interface NavMenu {
    title: string
    href: string
    subMenu?: Link[]
}

export interface galleryItem {
    thumbnail: ReactNode
    theImage: ReactNode
    caption?: string
    title?: string
    size?: number
}

export interface Post {
    author?: string;
    collections: string;
    coverImage?:string
    draft: boolean;
    excerpt: string;
    id:string;
    postBody: string;
    postDate: Date;
    tags: string[]
    title: string;
}