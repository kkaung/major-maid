import { Icons } from '@/components/icons';
import { PageHeader, headingVariants } from '@/components/page-header';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import HeroImage from '/public/assets/images/end-lease-cleaning.jpeg';
import Image from 'next/image';

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
            <div className="container mx-auto max-w-6xl w-full grid grid-cols-1 gap-12 md:grid-flow-row md:grid-cols-2">
                <div className="space-y-6">
                    <h1 className={cn(headingVariants({ size: 'lg' }))}>
                        <Balancer>
                            End Of Lease Cleaning Service In
                            <span className="text-primary ml-1">
                                {location}
                            </span>
                        </Balancer>
                    </h1>
                    <p>
                        Lowest Price Guaranteed Bond Cleaning Service — trusted
                        by thousands of customers across {location}. Secure the
                        return of your security bond with our thorough bond
                        cleaning service.
                    </p>
                    <div className="grid grid-cols-1 mt-6 gap-2 font-semibold text-lg sm:grid-cols-2">
                        <div>
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline"
                                strokeWidth={3}
                            />
                            Trusted Cleaner
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
                            5 Star Rated Service
                        </div>
                        <div>
                            <Icons.check
                                aria-hidden
                                className="w-4 h-4 mr-1 text-primary inline stroke-3"
                                strokeWidth={3}
                            />
                            Bond Back Guarantee
                        </div>
                    </div>
                    <Link
                        href="/booking"
                        className={cn(
                            buttonVariants({
                                size: 'lg',
                            }),
                            'font-semibold px-8 h-12 rounded-full'
                        )}
                    >
                        Get an instant quote
                    </Link>
                </div>
                <div>
                    <Image
                        width={500}
                        height={500}
                        src={HeroImage}
                        alt="Bond Cleaners"
                        className="bg-top object-cover z-10 rounded-xl"
                    />
                </div>
            </div>
        </PageHeader>
    );
}
