'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useState, type HTMLAttributes } from 'react';
import { descriptionVariants, headingVariants } from '@/components/page-header';
import { Icons } from '@/components/icons';
import { siteServices } from '@/configs/site';
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
            className={cn(props.className, 'py-24 px-4 space-y-12')}
        >
            <div className="space-y-4 text-center">
                <h2 className={cn(headingVariants({}))}>
                    <Balancer>
                        House Cleaning Services We Offer In
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
                <p className={cn(descriptionVariants({}), 'mx-auto')}>
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
                            <ul className="grid gap-x-6 gap-y-8 max-w-5xl w-full mx-auto grid-cols-1 sm:grid-cols-2">
                                {siteServices.map((service, idx) => {
                                    return (
                                        <li
                                            key={idx}
                                            className="relative flex  items-center justify-between  leading-tight border-b p-3"
                                        >
                                            <h6 className="mt-2 text-xl font-medium">
                                                {service.title}
                                            </h6>
                                            <Icons.chevronRight
                                                className="w-6 h-6"
                                                strokeWidth={2}
                                            />
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
        </section>
    );
}
