'use client';

import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import useScroll from '@/hooks/use-scroll';

interface SiteBannerProps extends HTMLAttributes<HTMLElement> {}

export default function SiteBanner({ ...props }: SiteBannerProps) {
    const scrolled = useScroll(20);

    return (
        <div
            className={cn(
                props.className,
                'sticky top-0 inset-x-0 z-50 flex gap-2 bg-secondary justify-end items-center py-2 container transition-all sm:gap-4',
                {
                    'bg-none bg-background/80 border-b backdrop-blur-lg backdrop-saturate-200':
                        scrolled,
                }
            )}
            {...props}
        >
            <Button
                variant="outline"
                className={cn(
                    'text-primary border-primary transition-colors hover:text-primary'
                )}
            >
                <Icons.phone aria-hidden className="w-4 h-4 mr-1 stroke-3" />
                1300 245 417 <span className="sr-only">Phone Number</span>
            </Button>
            <Link
                className={cn(
                    buttonVariants({}),
                    'rounded-full font-bold animate-shimmer bg-[linear-gradient(110deg,#2463EB,45%,#7ba4f6,55%,#2463EB)] bg-[length:200%_100%] transition-colors'
                )}
                href="/booking"
            >
                <span className="hidden mr-1 sm:inline">Get a quote &</span>
                Book online
            </Link>
        </div>
    );
}
