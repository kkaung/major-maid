import React, { type HTMLAttributes } from 'react';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export interface Artwork {
    artist: string;
    art: string;
}

export const works: Artwork[] = [
    {
        artist: 'Ornella Binni',
        art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
    },
    {
        artist: 'Tom Byrom',
        art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
    },
    {
        artist: 'Vladimir Malyavko',
        art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
    },
];

interface LatestBlogProps extends HTMLAttributes<HTMLElement> {}

export default function LatestBlog({ ...props }: LatestBlogProps) {
    return (
        <section className={cn(props.className, 'w-full max-w-5xl')} {...props}>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
                <Link href="/blog" className="underline font-bold group">
                    See All
                    <Icons.arrowRight
                        aria-hidden
                        className="ml-1 w-4 h-4 inline transition-all group-hover:translate-x-1"
                        strokeWidth={3}
                    />
                    <span className="sr-only">See All Blog Post</span>
                </Link>
            </div>
            <section>
                <ScrollArea className="max-w-5xl w-full rounded-md border">
                    <ul className="flex w-max gap-6">
                        {allPosts.map((post, idx) => (
                            <li key={idx} className="w-[300px]">
                                <article className="relative">
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className="overflow-hidden rounded-xl relative mb-2"
                                    >
                                        <Image
                                            fill
                                            src={post.image}
                                            alt={`${post.title}`}
                                            className="h-fit w-fit object-cover"
                                        />
                                        <Link
                                            href={`/blog/${post.slugAsParams}`}
                                            className="absolute inset-0"
                                        >
                                            <span className="sr-only">
                                                View Blog Post
                                            </span>
                                        </Link>
                                    </AspectRatio>
                                    <Link href={`/blog/${post.slugAsParams}`}>
                                        <h4 className="font-semibold text-lg leading-tight hover:underline">
                                            {post.title}
                                        </h4>
                                    </Link>
                                </article>
                            </li>
                        ))}
                    </ul>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </section>
            {/* <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                <div className="flex w-max space-x-4 p-4">
                    {works.map(artwork => (
                        <figure key={artwork.artist} className="shrink-0">
                            <div className="overflow-hidden rounded-md">
                                <Image
                                    src={artwork.art}
                                    alt={`Photo by ${artwork.artist}`}
                                    className="aspect-[3/4] h-fit w-fit object-cover"
                                    width={300}
                                    height={400}
                                />
                            </div>
                            <figcaption className="pt-2 text-xs text-muted-foreground">
                                Photo by{' '}
                                <span className="font-semibold text-foreground">
                                    {artwork.artist}
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea> */}
        </section>
    );
}
