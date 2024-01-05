import { Shell } from '@/components/shell';
import React from 'react';
import Hero from './_components/hero';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import Satisfaction from '@/components/marketing/satisfaction';
import FAQs from './_components/faqs';
import { getCity } from '@/lib/next';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    const city = getCity();

    return (
        <Shell>
            <Hero location={city} />
            <FAQs />
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    { title: 'Oven Cleaning', href: '/oven-cleaning' },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
