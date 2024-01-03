import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { headingVariants } from '../page-header';

interface HowWorkProps extends HTMLAttributes<HTMLElement> {}

export default function HowWork({ ...props }: HowWorkProps) {
    return (
        <section
            id="how-work"
            aria-labelledby="how-work-heading"
            className={cn(
                props.className,
                'space-y-12 max-w-5xl w-full mx-auto text-center'
            )}
        >
            <h2 className={headingVariants({})}>How {siteConfig.name} Works</h2>
            <ul className="grid grid-cols-1 gap-6 grid-flow-row md:grid-cols-3">
                <li>
                    <div className="space-y-2">
                        <p className="font-semibold text-lg">1. Book Online</p>
                        <p>
                            Book your Sydney house cleaning service online in 60
                            seconds.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="space-y-2">
                        <p className="font-semibold text-lg">2. We Clean</p>
                        <p>
                            Our cleaners in Sydney will come over &
                            professionally clean your home.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="space-y-2">
                        <p className="font-semibold text-lg">3. You Relax</p>
                        <p>
                            Sit back, relax and enjoy your sparkling clean home.
                        </p>
                    </div>
                </li>
            </ul>
            <div className="text-center">
                <Link
                    href="/booking"
                    className={cn(
                        buttonVariants({
                            size: 'lg',
                        }),
                        'font-semibold  rounded-full'
                    )}
                >
                    Book my cleaning
                </Link>
            </div>
        </section>
    );
}
