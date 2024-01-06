import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { Metadata } from 'next';
import React from 'react';
import Hero from './_components/hero';
import Satisfaction from '@/components/marketing/satisfaction';
import FAQs from './_components/faqs';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    return (
        <Shell>
            <Hero />
            <FAQs />
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    {
                        title: 'NDIS Cleaning',
                        href: '/ndis-cleaning',
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
