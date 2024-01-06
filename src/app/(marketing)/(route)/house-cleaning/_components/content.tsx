import { Shell } from '@/components/shell';
import React from 'react';
import Hero from './hero';
import Featuring from '@/components/marketing/featuring';
import FAQs from './faqs';
import Checklist from '@/components/marketing/checklist';
import Satisfaction from '@/components/marketing/satisfaction';
import Suburbs from '@/components/suburbs';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { LocalBusinessJsonLd } from 'next-seo';
import HowWork from '@/components/marketing/how-work';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <>
            <Shell variant="sidebar" className="grid-16">
                <Hero location={suburb && city} />
                <Featuring />
                <HowWork location={city} />
                <div className="container mx-auto max-w-7xl w-full space-y-16">
                    <Checklist
                        title="House Cleaning"
                        name="bond"
                    />
                    <FAQs />
                    <Satisfaction />
                    <Suburbs
                        title="Move In - Move Out Cleaners"
                        slug="move-in-move-out-cleaing"
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
