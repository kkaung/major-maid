import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { headers } from 'next/headers';
import React from 'react';
import Hero from './_components/hero';
import { type Metadata } from 'next';
import Satisfaction from '@/components/marketing/satisfaction';
import FAQs from './_components/faqs';

export const runtime = 'edge';

const getCity = () => {
    const headersList = headers();

    return headersList.get('x-vercel-ip-city') ?? 'Sydney';
};

export async function generateMetadata({}): Promise<Metadata> {
    return {
        title: '',
        description: '',
    };
}

export default function Page() {
    const city = getCity();

    return (
        <Shell className="grid-16">
            <Hero location={city} />
            <FAQs />
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'House Cleaning', href: '/house-cleaning' },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
