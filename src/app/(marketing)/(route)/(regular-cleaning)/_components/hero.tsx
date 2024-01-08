import { Icons } from '@/components/icons';
import { PageHeader, headingVariants } from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import React, { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Stamp from '/public/assets/stamp.png';
import Balancer from 'react-wrap-balancer';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Hero({ location = 'Sydney', ...props }: HeroProps) {
    const numbers = location === 'Sydney' ? '1000' : '100';

    return (
        <PageHeader
            id="hero"
            aria-labelledby="hero-heading"
            className={cn('relative rounded-3xl p-6', props.className)}
        >
            <div className="z-20 mx-auto max-w-4xl w-full grid gap-12 grid-flow-col md:grid-flow-row md:grid-cols-2">
                <div className="space-y-6">
                    <h1 className={cn(headingVariants({ size: 'lg' }))}>
                        <Balancer>
                            Regular House Cleaning Service In
                            <span className="text-primary ml-1">
                                {location}
                            </span>
                        </Balancer>
                    </h1>
                    <div className="grid grid-cols-1 mt-6 gap-2 font-semibold text-lg sm:grid-cols-2">
                        <div>
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline"
                                strokeWidth={3}
                            />
                            Trusted Cleaners
                        </div>
                        <div>
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline"
                                strokeWidth={3}
                            />
                            200% Guarantee
                        </div>
                        <div>
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline"
                                strokeWidth={3}
                            />
                            5-Star Rated Service
                        </div>
                        <div>
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline stroke-3"
                                strokeWidth={3}
                            />
                            Happy Customers
                        </div>
                    </div>
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
        </PageHeader>
    );
}
