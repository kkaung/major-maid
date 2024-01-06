import React from 'react';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import { toTitleCase, unslugify } from '@/lib/utils';
import Hero from '../_components/hero';
import FAQs from '../_components/faqs';

export const runtime = 'edge';

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
                    { title: 'Bond Cleaning', href: '/bond-cleaning' },
                    {
                        title: location,
                        href: `/bond-cleaning/${params.location}`,
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
