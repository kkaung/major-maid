import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import Hero from '../_components/hero';
import Satisfaction from '@/components/marketing/satisfaction';
import FAQs from '../_components/faqs';

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
                    { title: 'Carpet Cleaning', href: '/carpet-cleaning' },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
