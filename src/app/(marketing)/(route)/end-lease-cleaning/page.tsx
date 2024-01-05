import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';
import Hero from './_components/hero';
import Satisfaction from '@/components/marketing/satisfaction';
import { headers } from 'next/headers';
import Featuring from '@/components/marketing/featuring';
import Testmonials from '@/components/marketing/testmonials';
import FAQs from './_components/faqs';
import HowWork from './_components/how-work';
import { type Metadata } from 'next';

const getCity = () => {
    const headersList = headers();

    return headersList.get('x-vercel-ip-city') ?? 'Sydney';
};

export const runtime = 'edge';

export async function generateMetadata({}): Promise<Metadata> {
    return {
        title: '',
        description: '',
    };
}

export default function Page() {
    const city = getCity();

    return (
        <Shell>
            <Hero />
            <HowWork location="" />
            <Testmonials className="mx-auto" />
            <Featuring />
            <FAQs />
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    {
                        title: 'End Of Lease Cleaning',
                        href: '/end-lease-cleaning',
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
