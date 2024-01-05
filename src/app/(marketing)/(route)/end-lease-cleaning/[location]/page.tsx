import React from 'react';
import Hero from '../_components/hero';
import { Shell } from '@/components/shell';
import { toTitleCase, unslugify } from '@/lib/utils';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import Satisfaction from '@/components/marketing/satisfaction';
import FAQs from '../_components/faqs';
import { type Metadata } from 'next';
import HowWork from '../_components/how-work';

export const runtime = 'edge';

interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({}): Promise<Metadata> {
    return {
        title: '',
        description: '',
    };
}

export default function Page({ params }: PageProps) {
    const title = toTitleCase(unslugify(params.location));

    return (
        <Shell>
            <Hero location={title} />
            <HowWork />
            <FAQs />
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    {
                        title: 'End Lease Cleaning',
                        href: '/end-lease-cleaning',
                    },
                    {
                        title,
                        href: `/end-lease-cleaning/${params.location}`,
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
