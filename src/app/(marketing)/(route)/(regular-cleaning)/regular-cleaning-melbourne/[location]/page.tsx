import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { toTitleCase, unslugify } from '@/lib/utils';
import { type Metadata } from 'next';

import Content from '../../_components/content';

interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const subrub = toTitleCase(unslugify(params.location));

    return {
        title: `House Cleaning Service ${subrub} | Get An Instant Price & Book Online`,
        description: `Book your house cleaning service with our vetted cleaners in 60 seconds. The ${subrub}'s best domestic cleaners and home cleaning service.`,
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
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-melbourne',
                },
                {
                    title: suburb,
                    href: `/regular-cleaning-melbourne/${params.location}`,
                },
            ]}
        />
    );
}
