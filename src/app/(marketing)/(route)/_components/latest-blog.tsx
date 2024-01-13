import React, { type HTMLAttributes } from 'react';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
        <section className={cn(props.className, 'w-full mx-auto')} {...props}>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-semibold">
                    Read Suggested Articles About House Cleaning
                </h2>
            </div>
            <section>
                <ul className="flex flex-nowrap overflow-x-scroll gap-6">
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
            </section>
        </section>
    );
}
