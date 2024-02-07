import { Icons } from '@/components/icons';
import { PageHeader, headingVariants } from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import React, { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';
import HeroImage from '/public/assets/images/house-cleaning.jpeg';
import { siteConfig } from '@/configs/site';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Hero({ location = 'Sydney', ...props }: HeroProps) {
    const numbers = location === 'Sydney' ? '1000' : '100';

    return (
        <PageHeader
            id="hero"
            aria-labelledby="hero-heading"
            className={cn('pt-6', props.className)}
        >
            <div className="container mx-auto max-w-5xl w-full grid grid-cols-1 gap-12 md:grid-flow-row md:grid-cols-2">
                <div className="space-y-6">
                    <h1 className={cn(headingVariants({ size: 'lg' }))}>
                        <Balancer>
                            1st House Cleaning Service In
                            <span className="text-primary ml-1">
                                {location}
                            </span>
                        </Balancer>
                    </h1>
                    <div className="grid grid-cols-1 mt-6 gap-2 font-semibold text-lg sm:grid-cols-2">
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
                            200% Guarantee
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
                    <div className="mt-6 flex gap-4 items-center">
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
                </div>
                <div>
                    <Image
                        width={400}
                        height={400}
                        src={HeroImage}
                        alt="House Cleaning Service"
                        className="bg-top object-cover z-10 rounded-xl mx-auto"
                    />
                </div>
            </div>
        </PageHeader>
    );
}
