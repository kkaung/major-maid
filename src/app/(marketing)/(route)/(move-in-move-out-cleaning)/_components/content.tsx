import { Shell } from '@/components/shell';
import React from 'react';
import Hero from './hero';
import Featuring from '@/components/marketing/featuring';
import HowWork from './how-work';
import FAQs from './faqs';
import Checklist from '@/components/marketing/checklist';
import Satisfaction from '@/components/marketing/satisfaction';
import Suburbs from '@/components/suburbs';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { LocalBusinessJsonLd } from 'next-seo';
import Reviews from '@/components/marketing/reviews';
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
                    <Hero location={suburb && city} />
                    <Featuring />
                </div>
                <HowWork location={city} />
                <Reviews />
                <WhyUs />
                <div className="container mx-auto max-w-7xl w-full space-y-16">
                    <Checklist
                        title="Move In / Move Out Cleaning"
                        name="bond"
                    />
                    <FAQs />
                    <Satisfaction />
                    <Suburbs
                        title="Move In - Move Out Cleaners"
                        location={city}
                        slug={'move-in-move-out-cleaning'}
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
