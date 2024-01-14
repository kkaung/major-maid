import { Icons } from '@/components/icons';
import {
    PageHeader,
    descriptionVariants,
    headingVariants,
} from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Link from 'next/link';
import HeroImage from '/public/assets/images/hero-pp.jpeg';
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Hero({ location = 'Sydney', ...props }: HeroProps) {
    const numbers = location === 'Sydney' || 'Melbourne' ? '1000' : '100';

    return (
        <PageHeader
            id="hero"
            aria-labelledby="hero-heading"
            className={cn('pt-6', props.className)}
        >
            <div className="relative container mx-auto max-w-5xl w-full flex gap-12 flex-col lg:flex-row">
                <div className="space-y-6 flex-1">
                    <h1 className={cn(headingVariants({ size: 'lg' }))}>
                        <Balancer>
                            1st House Cleaning & Maid Service In
                            <span className="text-primary ml-1">
                                {location}
                            </span>
                        </Balancer>
                    </h1>
                    <p className={cn(descriptionVariants(), 'text-')}>
                        Sometimes, there&apos;s just too much to do. Our maid
                        service will take care of the housework. When
                        you&apos;re ready, book securely online. Get started
                        now!
                    </p>
                    <div className="mt-6 flex gap-4 items-center">
                        <Link
                            href="/booking"
                            className={cn(
                                buttonVariants({
                                    size: 'lg',
                                }),
                                'font-semibold text-lg px-8 h-12 rounded-full animate-shimmer bg-[linear-gradient(110deg,#2463EB,45%,#7ba4f6,55%,#2463EB)] bg-[length:200%_100%] transition-colors'
                            )}
                        >
                            Instant quote
                        </Link>
                        <Link
                            href=""
                            target="_blank"
                            className="flex items-center"
                        >
                            <Icons.fullGoogle className="w-7 h-7 mr-2" />
                            <div className="text-sm">
                                <div>Google Rating</div>
                                <div>
                                    <span className="text-primary">
                                        {siteConfig.rating.ratingValue}
                                    </span>
                                    <span>
                                        ({siteConfig.rating.ratingCount}+)
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex font-medium flex-col gap-3 md:gap-6 md:flex-row">
                        <p className="flex items-center gap-2">
                            <Icons.users
                                aria-hidden
                                className="w-5 h-5 inline"
                                strokeWidth={2}
                            />
                            <span className="leading-tight text-sm">
                                Trusted Cleaners
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Icons.shieldCheck
                                aria-hidden
                                className="w-5 h-5 inline"
                                strokeWidth={2}
                            />
                            <span className="leading-tight text-sm">
                                100% Guarantee
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Icons.sparkles
                                aria-hidden
                                className="w-5 h-5 inline"
                                strokeWidth={2}
                            />
                            <span className="leading-tight text-sm">
                                5 Star Rated Service
                            </span>
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        width={400}
                        height={400}
                        src={HeroImage}
                        alt="Hero Image"
                        className="bg-top object-contain z-10 rounded-xl mx-auto"
                    />
                </div>
            </div>
        </PageHeader>
    );
}
