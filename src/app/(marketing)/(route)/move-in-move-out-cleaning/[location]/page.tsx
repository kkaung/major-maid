import { Shell } from '@/components/shell';
import React from 'react';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { toTitleCase, unslugify } from '@/lib/utils';
import { type Metadata } from 'next';
import Hero from '../_components/hero';
import FAQs from '../_components/faqs';

interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    return {
        title: '',
        description: '',
    };
}

export default function Page({ params }: PageProps) {
    const location = toTitleCase(unslugify(params.location));

    return (
        <Shell>
            <Hero location={location} />
            <FAQs />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    {
                        title: 'Move In Move Out Cleaning',
                        href: '/move-in-move-out-cleaning',
                    },
                    {
                        title: location,
                        href: `/move-in-move-out-cleaning/${params.location}`,
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
