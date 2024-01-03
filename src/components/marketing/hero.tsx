import { Icons } from '@/components/icons';
import GridPattern from '@/components/magicui/grid-pattern';
import { PageHeader, headingVariants } from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Stamp from '/public/assets/stamp.png';
import HeroPreview from '/public/assets/images/hero.jpg';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Hero({ location = 'Sydney', ...props }: HeroProps) {
    const numbers = location === 'Sydney' ? '1000' : '100';

    return (
        <PageHeader
            id="hero"
            aria-labelledby="hero-heading"
            className={cn(
                'bg-[#F9F3EE] relative rounded-3xl p-6',
                props.className
            )}
        >
            <div className="z-20 mx-auto max-w-4xl w-full grid gap-12 grid-flow-col md:grid-flow-row md:grid-cols-2">
                <div className="space-y-6">
                    <div className="space-y-4">
                        <p className="text-red-500 font-medium">
                            Trusted by {numbers}+ Families in
                            <span className="font-semibold ml-1">
                                {location}
                            </span>
                        </p>
                        <div className="text-red-500 border border-red-500 inline-flex items-center p-2 rounded">
                            <Icons.fullGoogle
                                className="w-4 h-4 mr-1"
                                aria-hidden
                            />
                            <span className="font-medium">5.0</span>
                            <span className="sr-only">Google Rating</span>
                            <div className="flex ml-1 text-yellow-400">
                                <Icons.starFull
                                    className="w-4 h-4 "
                                    aria-hidden
                                />
                                <Icons.starFull
                                    className="w-4 h-4"
                                    aria-hidden
                                />
                                <Icons.starFull
                                    className="w-4 h-4"
                                    aria-hidden
                                />
                                <Icons.starFull
                                    className="w-4 h-4"
                                    aria-hidden
                                />
                                <Icons.starFull
                                    className="w-4 h-4"
                                    aria-hidden
                                />
                            </div>
                        </div>
                    </div>
                    <h1
                        className={cn(
                            headingVariants({ size: 'lg' }),
                            'text-[#051356]'
                        )}
                    >
                        1st House Cleaning
                        <br /> & Maid Service <br />
                        <span className="text-primary mt-1">In {location}</span>
                    </h1>
                    <div className="grid grid-cols-1 mt-6 gap-2 font-semibold text-lg sm:grid-cols-2">
                        <div>
                            <Icons.checkCircle
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline"
                                strokeWidth={3}
                            />
                            Trusted Cleaning
                        </div>
                        <div>
                            <Icons.checkCircle
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline"
                                strokeWidth={3}
                            />
                            200% Guarantee
                        </div>
                        <div>
                            <Icons.checkCircle
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline"
                                strokeWidth={3}
                            />
                            5-Star Rated Service
                        </div>
                        <div>
                            <Icons.checkCircle
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline stroke-3"
                                strokeWidth={3}
                            />
                            Happy Customers
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-x-2 gap-y-4 sm:flex-row">
                        <Image src={Stamp} width={90} height={90} alt="Stamp" />
                        <div className="space-y-2">
                            <Link
                                href="/booking"
                                className={cn(
                                    buttonVariants({
                                        size: 'lg',
                                    }),
                                    'font-semibold px-8 h-12 rounded-full animate-shimmer bg-[linear-gradient(110deg,#2463EB,45%,#7ba4f6,55%,#2463EB)] bg-[length:200%_100%] transition-colors'
                                )}
                            >
                                Get a quote & Book online
                            </Link>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                        Easily customize and book your {location} cleaning
                        service online in just 60 seconds using our
                        user-friendly booking form.
                    </p>
                </div>
                <div>
                    <div className="rounded-3xl bg-[#051356] h-[400px]">
                        <Image src={HeroPreview} alt="Hero Preview" />
                    </div>
                </div>
            </div>
            <GridPattern className="z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
        </PageHeader>
    );
}
