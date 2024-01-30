import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { locations } from '@/config/location';
import { env } from '@/env.mjs';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <Shell>
                <Breadcrumbs
                    segments={[
                        { title: 'Home', href: '/' },
                        { title: 'Locations', href: '/locations' },
                    ]}
                    dottable={false}
                />
                <PageHeader className="relative text-center">
                    <PageHeaderHeading className="mb-4">
                        House Cleaning Locations Throughout Australia
                    </PageHeaderHeading>
                    <PageHeaderDescription size="sm" className="mx-auto">
                        Find a local house cleaner in your city. We provide a
                        range of house cleaning services in all of the cities
                        listed below. If you have any questions, reach out to
                        our friendly customer service team!
                    </PageHeaderDescription>
                </PageHeader>
                <section className="w-full max-w-4xl mx-auto grid gap-12">
                    {locations.map((location, idx) => (
                        <section key={idx} className="space-y-6">
                            <div className="text-center ">
                                <h2 className="text-xl font-semibold relative">
                                    {location.title}
                                    <Link
                                        href={`/${location.title.toLowerCase()}`}
                                        className="absolute inset-0"
                                    >
                                        <span className="sr-only">
                                            View City
                                        </span>
                                    </Link>
                                </h2>
                                <p className="text-muted-foreground">
                                    We provide cleaning services to all suburbs
                                    in {location.title} and its surrounding
                                    areas.
                                </p>
                            </div>
                            <div>
                                <GoogleMapsEmbed
                                    apiKey={env.GM_API_KEY}
                                    height={200}
                                    width={200}
                                    mode="place"
                                    loading="lazy"
                                    q="Brooklyn+Bridge,New+York,NY"
                                    style={''}
                                    allowfullscreen={false}
                                />
                            </div>
                            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
                                {location.items.map((item, idx) => (
                                    <Link
                                        href={`/house-cleaning/${item.slug}`}
                                        key={idx}
                                    >
                                        <li className="text-primary font-medium transition-all hover:underline">
                                            {item.title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </section>
                    ))}
                </section>
            </Shell>
        </>
    );
}
