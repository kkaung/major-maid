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
        title: `Deep Cleaning Service In ${suburb} | Get An Instant Price & Book Online`,
        description: `Book your deep cleaning service with our vetted cleaners in 60 seconds. The ${suburb}'s best domestic cleaners and home cleaning service.`,
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
                { title: 'Deep Cleaning', href: '/deep-cleaning-melbourne' },
                {
                    title: suburb,
                    href: `/deep-cleaning-sydney/${params.location}`,
                },
            ]}
        />
    );
}
