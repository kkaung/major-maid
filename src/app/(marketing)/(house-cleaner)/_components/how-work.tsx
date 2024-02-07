import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { headingVariants } from '@/components/page-header';
import Image from 'next/image';
import BookOnline from '/public/assets/images/book-online.png';
import WeClean from '/public/assets/images/we-clean.png';
import YouRelax from '/public/assets/images/you-relax.png';

interface HowWorkProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function HowWork({
    location = 'Sydney',
    ...props
}: HowWorkProps) {
    return (
        <section
            id="how-work"
            aria-labelledby="how-work-heading"
            className={cn(
                props.className,
                'space-y-12 max-w-6xl w-full mx-auto text-center py-12'
            )}
        >
            <h2 className={headingVariants({})}>
                How It Works <span className="sr-only">For House Cleaning</span>
            </h2>
            <ul className="grid grid-cols-1 gap-6 grid-flow-row md:grid-cols-3">
                <li>
                    <div className="space-y-2">
                        <Image
                            width={150}
                            height={150}
                            src={BookOnline}
                            className="mx-auto"
                            alt="Book Online"
                        />
                        <p className="font-semibold text-lg">1. Book Online</p>
                        <p>
                            Book your {location} house cleaning service online
                            in 60 seconds.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="space-y-2">
                        <Image
                            width={150}
                            height={150}
                            src={WeClean}
                            className="mx-auto"
                            alt="We Clean"
                        />
                        <p className="font-semibold text-lg">2. We Clean</p>
                        <p>
                            Our cleaners in {location} will come over &
                            professionally clean your home.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="space-y-2">
                        <Image
                            width={150}
                            height={150}
                            src={YouRelax}
                            className="mx-auto"
                            alt="You Relax"
                        />
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
