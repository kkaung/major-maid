import { cn } from '@/lib/utils';
import type { Author, Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';

interface PostCardProps extends HTMLAttributes<HTMLElement> {
    post: Post;
    author: Author | null;
}

export default function PostCard({ post, author, ...props }: PostCardProps) {
    return (
        <section className={cn(props.className, 'relative')}>
            <Image fill src="" alt="" />
            <div>
                <h4 className="text-xl font-semibold">{post.title}</h4>
            </div>
            <Link
                href={`/blog/${post.slugAsParams}`}
                className="absolute inset-0"
            >
                <span className="sr-only">View Blog Post</span>
            </Link>
        </section>
    );
}
