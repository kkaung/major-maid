'use client';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';
import { headingVariants } from '@/components/page-header';
import Balancer from 'react-wrap-balancer';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Icons } from '@/components/icons';

interface ServiceInclusionProps extends HTMLAttributes<HTMLElement> {}

export default function ServiceInclusion({ ...props }: ServiceInclusionProps) {
    const items: {
        title: string;
        content: string;
        icon: keyof typeof Icons;
    }[] = [
        {
            title: 'Expert Cleaners',
            content:
                'A team of two professional cleaners will come to your home or apartment.',
            icon: 'cleaners',
        },
        {
            title: 'Instant Online Booking',
            content:
                'A team of two professional cleaners will come to your home or apartment.',
            icon: 'clocking',
        },
        {
            title: 'Dedicated Service',
            content:
                'Our experienced customer service team is available to assist you at every step of your move.',
            icon: 'headset',
        },
        {
            title: 'Satisfaction guarantee',
            content:
                'If you are not happy with our service, we will come back free of charge.',
            icon: 'heart',
        },
        {
            title: 'Fully insured against damages.',
            content:
                'If you are not happy with our service, we will come back free of charge.',
            icon: 'shield',
        },
    ];

    return (
        <section
            id="service-inclusions"
            aria-labelledby="service-inclusions-heading"
            className={cn(props.className, 'py-12 container mx-auto')}
            {...props}
        >
            <div className="text-center mb-12">
                <h2 className={cn(headingVariants({}))}>
                    <Balancer>
                        What&apos;s included when <br />
                        you book a cleaner with {siteConfig.logo}?
                    </Balancer>
                </h2>
            </div>
            <div className="w-full mx-auto max-w-xs sm:mx-0 sm:max-w-lg md:max-w-5xl">
                <Carousel opts={{}}>
                    <CarouselContent className="-ml-1 space-x-6">
                        {items.map((i, idx) => {
                            const Icon = Icons[i.icon];

                            return (
                                <CarouselItem
                                    key={idx}
                                    className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                                >
                                    <Icon
                                        className={`text-primary mb-4 h-14 w-14`}
                                        aria-hidden
                                    />
                                    <h4 className="text-lg font-semibold mb-3 leading-tight">
                                        {i.title}
                                    </h4>
                                    <p>{i.content}</p>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <div className="absolute  pt-6 right-4 -translate-x-full mt-6">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
