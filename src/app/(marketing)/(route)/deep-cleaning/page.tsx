import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { getCity } from '@/lib/next';
import React from 'react';
import Hero from './_components/hero';
import Satisfaction from '@/components/marketing/satisfaction';
import FAQs from './_components/faqs';
import { Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    const city = getCity();

    return (
        <Shell>
            <Hero />
            <FAQs />
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    { title: 'Deep Cleaning', href: '/deep-cleaning' },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
