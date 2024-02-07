import { Icons } from '@/components/icons';
import { PageHeader, headingVariants } from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Link from 'next/link';
import HeroPreview from '/public/assets/images/hero-pp.jpeg';
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import { siteConfig } from '@/configs/site';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Hero({ location = 'Sydney', ...props }: HeroProps) {
    const numbers = location === 'Sydney' || 'Melbourne' ? '1000' : '100';

    return (
        <PageHeader
            id="hero"
            aria-labelledby="hero-heading"
            className={cn('max-w-5xl w-full mx-auto', props.className)}
        >
            <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
                <div className="flex-1">
                    <h1 className={cn(headingVariants({ size: 'lg' }))}>
                        <Balancer>
                            1st House Cleaning & Maid Service In
                            <span className="text-primary ml-1">
                                {location}
                            </span>
                        </Balancer>
                    </h1>
                    <p className="font-medium mt-6 mb-3">
                        {siteConfig.name}&apos;s vetted cleaners are here to
                        make your home clean and tidy.
                    </p>
                    <div className="space-y-2">
                        <p>
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline"
                                strokeWidth={3}
                            />
                            Trusted Cleaners
                        </p>
                        <p>
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline"
                                strokeWidth={3}
                            />
                            100% Guarantee
                        </p>
                        <p>
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline"
                                strokeWidth={3}
                            />
                            5-Star Rated Service
                        </p>
                        <p>
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline stroke-3"
                                strokeWidth={3}
                            />
                            Happy Customers
                        </p>
                    </div>
                    <div className="mt-6">
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
                <div>
                    <Image
                        width={400}
                        height={400}
                        src={HeroPreview}
                        alt="Hero Image"
                        className="bg-top object-cover z-10 rounded-xl"
                    />
                </div>
            </div>
        </PageHeader>
    );
}
