import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { getCity } from '@/lib/next';
import React from 'react';
import Hero from './_components/hero';
import Satisfaction from '@/components/marketing/satisfaction';
import FAQs from './_components/faqs';
import { Metadata } from 'next';
import { LocalBusinessJsonLd } from 'next-seo';
import Featuring from '@/components/marketing/featuring';
import HowWork from './_components/how-work';
import WhyUs from '@/components/marketing/why-us';
import Reviews from '@/components/marketing/reviews';

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
                <Reviews />
                <HowWork />
                <div className="mx-auto container w-full max-w-6xl space-y-16">
                    <WhyUs location={city} service="Deep Cleaning Service" />
                    <FAQs location={city} />
                    <Satisfaction />
                    <Breadcrumbs
                        segments={[
                            { title: 'Home', href: '/' },
                            { title: 'Services', href: '/services' },
                            { title: 'Deep Cleaning', href: '/deep-cleaning' },
                        ]}
                        dottable={false}
                    />
                </div>
            </Shell>
            <LocalBusinessJsonLd
                type={''}
                id={''}
                name={''}
                description={''}
                address={{}}
                rating={{
                    
                }}
            />
        </>
    );
}
