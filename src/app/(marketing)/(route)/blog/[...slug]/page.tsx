import { notFound } from 'next/navigation';
import { type Author, allAuthors, allPosts } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx/mdx-component';
import Image from 'next/image';
import Link from 'next/link';
import { type Metadata } from 'next';
import { env } from '@/env.mjs';
import { absoluteUrl, cn, formatDate } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import Dot from '@/components/dot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { headingVariants } from '@/components/page-header';

export const runtime = 'edge';

interface PostPageProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(params: any) {
    const slug = params?.slug?.join('/');
    const post = allPosts.find(post => post.slugAsParams === slug);

    if (!post) null;

    return post;
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const post = await getPostFromParams(params);

    if (!post) return {};

    const url = env.NEXT_PUBLIC_APP_URL;

    const ogUrl = new URL(`${url}/api/og`);
    ogUrl.searchParams.set('heading', post.title);
    ogUrl.searchParams.set('type', 'Blog Post');
    ogUrl.searchParams.set('mode', 'dark');

    return {
        title: post.title,
        description: post.description,
        // authors: post.authors.map(author => ({
        //     name: author,
        // })),
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: absoluteUrl(post.slug),
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [ogUrl.toString()],
        },
    };
}

export async function generateStaticParams(): Promise<
    PostPageProps['params'][]
> {
    return allPosts.map(post => ({
        slug: post.slugAsParams.split('/'),
    }));
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPostFromParams(params);

    if (!post) {
        notFound();
    }

    const author = allAuthors.find(
        author => author.slugAsParams === post.author
    ) as Author;

    return (
        <article className="container relative max-w-3xl py-6 lg:py-10">
            <Link
                href="/blog"
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'absolute left-[-200px] top-14 hidden xl:inline-flex'
                )}
            >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
            </Link>
            <div>
                {post.date && (
                    <time
                        dateTime={post.date}
                        className="block text-sm text-muted-foreground mb-2"
                    >
                        Published on {formatDate(post.date)}
                    </time>
                )}
                <h1 className={headingVariants({})}>{post.title}</h1>
                <div className="mt-4 flex space-x-4">
                    <div
                        key={author._id}
                        className="flex gap-2 items-center justify-center"
                    >
                        <Image
                            src={author.avatar}
                            alt={author.title}
                            width={42}
                            height={42}
                            className="rounded-full bg-white"
                        />
                        <p className="font-semibold">by {author.title}</p>
                        <Dot />
                        <p className="text-muted-foreground font-medium text-sm">
                            {post.readingTime} mins
                        </p>
                    </div>
                </div>
            </div>
            {post.image && (
                <Image
                    src={post.image}
                    alt={post.title}
                    width={720}
                    height={405}
                    className="my-8 rounded-md border bg-muted transition-colors"
                    priority
                />
            )}
            <Mdx code={post.body.code} />
            <section className="mt-8">
                <Card>
                    <CardHeader>
                        <div className="flex gap-4">
                            <CardTitle>
                                <Avatar>
                                    <AvatarImage
                                        src={author.avatar}
                                        alt="Author Avatar"
                                    />
                                    <AvatarFallback>
                                        {author.title.charAt(0).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </CardTitle>
                            <div className="font-semibold">
                                <p className="text-xs text-muted-foreground">
                                    Article by
                                </p>
                                <Link href={`/author/${author.slugAsParams}`}>
                                    <p className="relative text-primary hover:underline">
                                        {author.title}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground">{author.description}</p>
                    </CardContent>
                </Card>
            </section>
            <hr className="mt-12" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link
                    href="/blog"
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                >
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    See all posts
                </Link>
            </div>
        </article>
    );
}
