import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { Metadata } from 'next';
import React from 'react';
import Hero from './_components/hero';
import Satisfaction from '@/components/marketing/satisfaction';
import FAQs from './_components/faqs';
import {
    CollectionPageJsonLd,
    LocalBusinessJsonLd,
    ProductJsonLd,
} from 'next-seo';
import { siteConfig } from '@/config/site';
import HowWork from './_components/how-work';
import { getCity } from '@/lib/next';
import Locations from '../_components/locations';
import PopularLocations from './_components/popular-locations';
import Featuring from '@/components/marketing/featuring';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    const city = getCity();

    return (
        <>
            <Shell variant="sidebar" className="grid-16">
                <Hero location={city} />
                <Featuring />
                <HowWork location={city} />
                <div className="container mx-auto space-y-16 max-w-7xl">
                    <FAQs location={city} />
                    <Satisfaction />
                    <Breadcrumbs
                        segments={[
                            { title: 'Home', href: '/' },
                            { title: 'Services', href: '/services' },
                            { title: 'Bond Cleaning', href: '/bond-cleaning' },
                        ]}
                        dottable={false}
                    />
                </div>
            </Shell>
            <LocalBusinessJsonLd
                useAppDir
                type=""
                id=""
                name=""
                description=""
                address={{}}
            />
        </>
    );
}
