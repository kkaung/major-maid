import React from 'react';
import { Shell } from '@/components/shell';
import Featuring from '@/components/marketing/featuring';
import Satisfaction from '@/components/marketing/satisfaction';
import Suburbs from '@/components/suburbs';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { LocalBusinessJsonLd } from 'next-seo';
import Reviews from '@/components/marketing/reviews';

import Hero from './hero';
import HowWork from './how-work';
import FAQs from './faqs';
import WhyUs from '@/components/marketing/why-us';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <>
            <Shell variant="sidebar" className="grid-16">
                <div>
                    <Hero location={suburb ?? city} />
                    <Featuring />
                </div>
                <div className="container mx-auto">
                    <HowWork location={suburb ?? city} />
                </div>
                <Reviews />
                <WhyUs />
                <div className="container mx-auto max-w-7xl w-full space-y-16">
                    <FAQs />
                    <Satisfaction />
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
