import React, { type HTMLAttributes } from 'react';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface LatestBlogProps extends HTMLAttributes<HTMLElement> {}

export default function LatestBlog({ ...props }: LatestBlogProps) {
    return (
        <section className={cn(props.className)} {...props}>
            <div className="flex justify-between mb-6">
                <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
                <Link
                    href="/frequently-asked-questions"
                    className={'underline font-bold group'}
                >
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
                <ul className="grid grid-cols-3 gap-6">
                    {allPosts.map((post, idx) => (
                        <li key={idx}>
                            <article className="relative ">
                                <AspectRatio
                                    ratio={16 / 9}
                                    className="overflow-hidden rounded-xl relative mb-2"
                                >
                                    <Image
                                        fill
                                        src={post.image}
                                        alt={`${post.title}`}
                                        className="bg-cover object-cover"
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
