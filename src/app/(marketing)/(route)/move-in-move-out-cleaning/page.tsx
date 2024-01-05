import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { getCity } from '@/lib/next';
import { Metadata } from 'next';
import React from 'react';
import Hero from './_components/hero';
import FAQs from './_components/faqs';

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
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    {
                        title: 'Move In Move Out Cleaning',
                        href: '/move-in-move-out-cleaning',
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
