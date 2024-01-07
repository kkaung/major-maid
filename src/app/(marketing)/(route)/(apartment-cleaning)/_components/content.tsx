import React from 'react';
import { Shell } from '@/components/shell';
import Featuring from '@/components/marketing/featuring';
import Satisfaction from '@/components/marketing/satisfaction';
import Suburbs from '@/components/suburbs';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { LocalBusinessJsonLd } from 'next-seo';

import Hero from './hero';
import HowWork from './how-work';
import FAQs from './faqs';
import Inclusion from './inclusion';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <>
            <Shell variant="sidebar" className="grid-16">
                <Hero location={suburb ?? city} />
                <Featuring />
                <HowWork location={suburb ?? city} />
                <div className="container mx-auto max-w-7xl w-full space-y-16">
                    <Inclusion />
                    <FAQs />
                    <Satisfaction />
                    <Suburbs
                        title="Apartment Cleaners"
                        slug="apartment-cleaning"
                        location={city}
                    />
                    <Breadcrumbs segments={segments} dottable={false} />
                </div>
            </Shell>
            <LocalBusinessJsonLd
                useAppDir
                type="Cleaning"
                id=""
                name={''}
                description={''}
                address={{}}
            />
        </>
    );
}
