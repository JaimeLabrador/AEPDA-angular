export interface Ihome {
    title: string;
    images: Iimage[];
    articles: Iarticles[];
}

export interface Iimage {
    src: string;
    alt: string;
}

export interface Iarticles {
    image: Iimage;
    title: string;
    content: string;
}