import { Icons } from '@/components/icons';
import GridPattern from '@/components/magicui/grid-pattern';
import { PageHeader, headingVariants } from '@/components/page-header';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Stamp from '/public/assets/stamp.png';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Hero({ location = 'Sydney', ...props }: HeroProps) {
    return (
        <PageHeader
            id="hero"
            aria-labelledby="hero-heading"
            className={cn(
                'relative grid grid-flow-col md:grid-flow-row md:grid-cols-2',
                props.className
            )}
        >
            <div className="space-y-6">
                <div className="space-y-4">
                    <p className="font-semibold text-primary">
                        Trusted by 1000+ Families in Sydney
                    </p>
                    <div className="text-red-500 border border-red-500 inline-flex items-center p-2 rounded">
                        <Icons.fullGoogle
                            className="w-4 h-4 mr-1"
                            aria-hidden
                        />
                        <span className="font-medium">5.0</span>
                        <span className="sr-only">Google Rating</span>
                        <div className="flex ml-1 text-yellow-400">
                            <Icons.starFull className="w-4 h-4 " aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                        </div>
                    </div>
                </div>
                <h1 className={cn(headingVariants({ size: 'lg' }))}>
                    1st House <br /> Cleaning & Maid Service <br />
                    <span className="text-primary mt-1">In {location}</span>
                </h1>
                <div className="grid grid-cols-1 mt-6 gap-2 font-semibold text-lg sm:gap-4 sm:grid-cols-2">
                    <div>
                        <Icons.checkCircle
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline"
                            strokeWidth={3}
                        />
                        Trusted Cleaning
                    </div>
                    <div>
                        <Icons.checkCircle
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline"
                            strokeWidth={3}
                        />
                        200% Guarantee
                    </div>
                    <div>
                        <Icons.checkCircle
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline"
                            strokeWidth={3}
                        />
                        5-Star Rated Service
                    </div>
                    <div>
                        <Icons.checkCircle
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline stroke-3"
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
                                'font-semibold px-8 h-12 uppercase rounded-full'
                            )}
                        >
                            Get A Quote & Book Online
                        </Link>
                        <p className="text-xs text-primary text-center">
                            TAKES LESS THAN 60 SECONDS
                        </p>
                    </div>
                </div>
                <p className="text-muted-foreground">
                    Easily customize and book your {location} cleaning service
                    online in just 60 seconds using our user-friendly booking
                    form.
                </p>
            </div>
            <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
        </PageHeader>
    );
}
