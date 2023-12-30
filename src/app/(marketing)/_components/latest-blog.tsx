import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

interface LatestBlogProps extends HTMLAttributes<HTMLElement> {}

export default function LatestBlog({ ...props }: LatestBlogProps) {
    return (
        <section className={cn(props.className)} {...props}>
            <h2 className="text-3xl font-semibold">
                Some Of Our Latest Blog Posts
            </h2>
            <div className="text-center mt-6">
                <Link href="/" className={'group font-semibold text-primary'}>
                    See All
                    <Icons.arrowRight className="ml-1 w-4 h-4 stroke-2 inline transition-all group-hover:translate-x-1" />
                    <span className="sr-only">See All Blog Posts</span>
                </Link>
            </div>
        </section>
    );
}
