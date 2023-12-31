import { Icons } from '@/components/icons';
import GridPattern from '@/components/magicui/grid-pattern';
import { PageHeader, headingVariants } from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';
import Image from 'next/image';

import Stamp from '../../../public/assets/stamp.png';

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
                <div className="flex gap-4">
                    <div className="text-red-500 border border-red-500 inline-flex items-center p-2 rounded">
                        <Icons.google className="w-4 h-4 mr-1" aria-hidden />
                        <span className="font-medium">5.0</span>
                        <span className="sr-only">Google Rating</span>
                        <div className="flex ml-1 text-yellow-400">
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                        </div>
                    </div>
                    <p className="font-semibold text-primary">
                        Trusted by 1000+ Families in Sydney
                    </p>
                </div>
                <h1 className={cn(headingVariants({ size: 'lg' }))}>
                    1st House <br /> Cleaning & Maid Service <br />
                    <span className="text-primary mt-1">In {location}</span>
                </h1>
                <div className="grid grid-cols-2 gap-4 mt-6 font-semibold text-lg">
                    <div>
                        <Icons.check
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 stroke-2 inline"
                        />
                        Trusted Cleaning
                    </div>
                    <div>
                        <Icons.check
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline stroke-2"
                        />
                        200% Guarantee
                    </div>
                    <div>
                        <Icons.check
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline stroke-2"
                        />
                        5-Star Rated Service
                    </div>
                    <div>
                        <Icons.check
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline stroke-2"
                        />
                        Happy Customers
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Image src={Stamp} width={90} height={90} alt="Stamp" />
                    <Button
                        className="font-semibold px-8 py-1 uppercase"
                        size="lg"
                    >
                        Get A Quote & Book Online
                    </Button>
                </div>
                <p className="text-muted-foreground">
                    Easily customize and book your {location} cleaning service
                    online in just 1 minutes using our user-friendly booking
                    form.
                </p>
            </div>
            <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
        </PageHeader>
    );
}
