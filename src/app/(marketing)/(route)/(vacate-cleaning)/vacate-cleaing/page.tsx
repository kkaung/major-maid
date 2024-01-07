import { PageHeader, PageHeaderDescription } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { Metadata } from 'next';
import React from 'react';
import Hero from '../_components/hero';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    return (
        <Shell>
            <Hero />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    { title: 'Vacate Cleaing', href: '/vacate-cleaing' },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
