import React from 'react';
import { type Metadata } from 'next';
import { getCityFromPathname } from '@/lib/next';
import { toTitleCase, unslugify } from '@/lib/utils';

import Content from '../../_components/content';

export const runtime = 'edge';

interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const suburb = toTitleCase(unslugify(params.location));

    return {
        title: `Spring Cleaning Service ${suburb} | 100% Bond Back Guarantee`,
        description:
            'Book your spring cleaning service with our trusted cleaners. Book online in 60 seconds.',
    };
}

export default function Page({ params }: PageProps) {
    const city = getCityFromPathname();

    const suburb = toTitleCase(unslugify(params.location));

    return (
        <Content
            city={city}
            suburb={suburb}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                {
                    title: 'Spring Cleaning',
                    href: '/spring-cleaning-melbourne',
                },
                { title: suburb, href: `/spring-cleaning-melbourne/${suburb}` },
            ]}
        />
    );
}
