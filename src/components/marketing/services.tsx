'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState, type HTMLAttributes } from 'react';
import { descriptionVariants, headingVariants } from '@/components/page-header';
import { Icons } from '@/components/icons';
import { siteServices } from '@/config/site';
import * as Tabs from '@radix-ui/react-tabs';
import Balancer from 'react-wrap-balancer';

interface ServicesProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Services({
    location = 'Sydney',
    ...props
}: ServicesProps) {
    const [tab, setTab] = useState('Sydney');

    const cities = ['Sydney', 'Melbourne', 'Canberra'];

    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className={cn(
                props.className,
                'bg-secondary py-12 px-4 space-y-12'
            )}
        >
            <div className="space-y-4 text-center">
                <h2 className={cn(headingVariants({}))}>
                    <Balancer>
                        House Cleaning Services We Offer in
                        {cities.map(city => {
                            const isActive = tab === city;

                            return (
                                <span
                                    key={city}
                                    className={cn('text-primary ml-1', {
                                        hidden: !isActive,
                                    })}
                                >
                                    {city}
                                </span>
                            );
                        })}
                    </Balancer>
                </h2>
                <p
                    className={cn(
                        descriptionVariants({ size: 'sm' }),
                        'mx-auto'
                    )}
                >
                    Whatever your cleaning needs are, we&apos;ve got you
                    covered.
                </p>
            </div>
            <Tabs.Root
                defaultValue={location}
                value={tab}
                onValueChange={setTab}
            >
                {cities.map(city => {
                    const isActive = tab === city;

                    return (
                        <Tabs.Content
                            key={city}
                            forceMount
                            value={city}
                            className={cn({ hidden: !isActive })}
                        >
                            <ul className="grid gap-x-6 gap-y-8 max-w-5xl w-full mx-auto grid-cols-3 sm:grid-cols-6">
                                {siteServices.map((service, idx) => {
                                    const Icon = Icons[service.icon ?? 'add'];

                                    return (
                                        <li
                                            key={idx}
                                            className="relative flex flex-col justify-center items-center text-center leading-tight"
                                        >
                                            <Icon className="w-12 h-12" />
                                            <h6 className="mt-2">
                                                {service.title}
                                            </h6>
                                            <Link
                                                href={`${
                                                    service.slug
                                                }-${city.toLowerCase()}`}
                                                className="absolute inset-0"
                                                title={`${service.title} ${city}`}
                                            >
                                                <span className="sr-only">
                                                    {service.title} {city}
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </Tabs.Content>
                    );
                })}
            </Tabs.Root>
            <div className="text-center mt-6">
                <Link href="/services" className={'underline font-bold group'}>
                    See All
                    <Icons.arrowRight
                        aria-hidden
                        className="ml-1 w-4 h-4 inline transition-all group-hover:translate-x-1"
                        strokeWidth={3}
                    />
                    <span className="sr-only">See All Services</span>
                </Link>
            </div>
        </section>
    );
}
