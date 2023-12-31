import React, { type HTMLAttributes } from 'react';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import Image from 'next/image';

interface LatestBlogProps extends HTMLAttributes<HTMLElement> {}

export default function LatestBlog({ ...props }: LatestBlogProps) {
    return (
        <section className={cn(props.className)} {...props}>
            <div className="flex justify-between mb-6">
                <h2 className="text-3xl font-semibold">Latest Blog Posts</h2>
                <Link
                    href="/"
                    className={cn(
                        buttonVariants({ variant: 'outline', size: 'sm' })
                    )}
                >
                    See All
                    <Icons.arrowRight className="ml-1 w-4 h-4 stroke-2 inline transition-all group-hover:translate-x-1" />
                    <span className="sr-only">See All Blog Posts</span>
                </Link>
            </div>
            <section>
                <ul className="grid grid-cols-3 gap-6">
                    {allPosts.map((post, idx) => (
                        <li key={idx}>
                            <article className="relative">
                                <Image fill src={''} alt={`${post.title}`} />
                                <h4 className="font-semibold text-lg leading-tight">
                                    {post.title}
                                </h4>
                                <Link
                                    href={`/${post.slug}`}
                                    className="absolute inset-0"
                                >
                                    <span className="sr-only">
                                        View Blog Post
                                    </span>
                                </Link>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}
