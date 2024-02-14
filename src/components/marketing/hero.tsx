import { Icons } from '@/components/icons';
import { PageHeader, headingVariants } from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Link from 'next/link';
import HeroImage from '/public/assets/images/hero-pp.jpeg';
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import { siteConfig } from '@/configs/site';
import { cities } from '@/configs/location';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Hero({ location = 'Sydney', ...props }: HeroProps) {
    const numbers = location === 'Sydney' || 'Melbourne' ? '1000' : '100';

    return (
        <PageHeader
            id="hero"
            aria-labelledby="hero-heading"
            className={cn(
                'pt-6 container mx-auto max-w-6xl w-full',
                props.className
            )}
        >
            <div className="relative flex items-center gap-12 flex-col lg:flex-row">
                <div className="space-y-6 flex-1">
                    <h1 className={cn(headingVariants({ size: 'lg' }))}>
                        <Balancer>
                            1st House Cleaning & Maid Service In
                            <span className="text-primary ml-1">
                                {location}
                            </span>
                        </Balancer>
                    </h1>
                    <p className={cn('text-muted-foreground')}>
                        Sometimes, there&apos;s just too much to do. Our maid
                        service will take care of the housework. When
                        you&apos;re ready, book securely online. Get started
                        now!
                    </p>
                    <div className="flex flex-col gap-3 md:gap-3">
                        <p className="flex items-center gap-2">
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 inline"
                                strokeWidth={2}
                            />
                            <span className="leading-tight">
                                Trusted Cleaners
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 inline"
                                strokeWidth={2}
                            />
                            <span className="leading-tight">
                                100% Guarantee
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 inline"
                                strokeWidth={2}
                            />
                            <span className="leading-tight">
                                5 Star Rated Service
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 inline"
                                strokeWidth={2}
                            />
                            <span className="leading-tight">
                                Trusted by 1000+ families in {location}
                            </span>
                        </p>
                    </div>
                    <div className="mt-6 flex gap-4 items-center flex-col sm:flex-row">
                        <Link
                            href="/booking"
                            className={cn(
                                buttonVariants({
                                    size: 'lg',
                                }),
                                'rounded-full'
                            )}
                        >
                            Get an instant quote
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
                                    <span className="text-primary font-medium">
                                        {siteConfig.rating.ratingValue}
                                    </span>
                                    <span>
                                        ({siteConfig.rating.ratingCount}+)
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <Image
                        width={500}
                        height={500}
                        src={HeroImage}
                        alt="Hero Image"
                        className="bg-top object-contain z-10 rounded-xl mx-auto overflow-hidden"
                    />
                </div>
            </div>
            <ul className="flex items-center gap-6 py-4 font-medium">
                {cities.map(c => (
                    <li key={c}>
                        <Link
                            href={`/house-cleaner-${c.toLowerCase()}`}
                            title={`House Cleaning ${c}`}
                        >
                            {c}
                        </Link>
                    </li>
                ))}
            </ul>
        </PageHeader>
    );
}
