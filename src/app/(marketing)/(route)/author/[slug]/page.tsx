import React from 'react';
import { Shell } from '@/components/shell';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { toTitleCase, unslugify } from '@/lib/utils';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import GridPattern from '@/components/magicui/grid-pattern';
import { allAuthors, allPosts } from 'contentlayer/generated';
import { type Metadata } from 'next';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import PostCard from '../../blog/_components/post-card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Icons } from '@/components/icons';
import Link from 'next/link';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

interface PageProps {
    params: {
        slug: string;
    };
}

export default function Page({ params }: PageProps) {
    const title = toTitleCase(unslugify(params.slug));

    const author = allAuthors.find(
        author => author.slugAsParams === params.slug
    );

    if (!author) redirect('/blog');

    const posts = allPosts.filter(post => {
        return post.author.includes(author?.slugAsParams ?? '');
    });

    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Author', href: '/blog' },
                    { title: title, href: `/author/${params.slug}` },
                ]}
                dottable={false}
            />
            <PageHeader className="relative grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl w-full mx-auto py-12">
                <div className="space-y-4">
                    <PageHeaderHeading>{author.title}</PageHeaderHeading>
                    <PageHeaderDescription className="mx-auto" size="sm">
                        {author.description}
                    </PageHeaderDescription>
                    <div>
                        <Link href={author.linkin}>
                            <Icons.linkin className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
                <Image
                    width={300}
                    height={300}
                    src={author.avatar}
                    alt={`${author.title}`}
                    className="hidden bg-cover object-cover rounded-xl sm:block"
                />
                <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
            </PageHeader>
            <section className="mx-auto w-full max-w-4xl gap-6">
                <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {posts.map((post, key) => (
                        <li key={key}>
                            <PostCard post={post} author={author} />
                        </li>
                    ))}
                </ul>
            </section>
        </Shell>
    );
}
