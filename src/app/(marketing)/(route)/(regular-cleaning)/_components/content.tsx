import { Shell } from '@/components/shell';
import React from 'react';
import Featuring from '@/components/marketing/featuring';
import Checklist from '@/components/marketing/checklist';
import Satisfaction from '@/components/marketing/satisfaction';
import Suburbs from '@/components/suburbs';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { LocalBusinessJsonLd } from 'next-seo';
import HowWork from '@/components/marketing/how-work';

import Hero from './hero';
import FAQs from './faqs';

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
                    <HowWork location={city} />
                </div>
                <div className="container mx-auto max-w-7xl w-full space-y-16">
                    <Checklist title="House Cleaning" name="bond" />
                    <FAQs />
                    <Satisfaction />
                    <Suburbs
                        title={`Find House Cleaners In Surburb Of ${city}`}
                        slug={`house-cleaning-${city.toLocaleLowerCase()}`}
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
