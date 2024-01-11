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
        title: ``,
        description: ``,
    };
}

export default function Page({ params }: PageProps) {
    const city = getCityFromPathname();

    const suburb = toTitleCase(unslugify(params.location));

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                {
                    title: 'Matress Cleaning',
                    href: '/matress-cleaning-melbourne',
                },
                {
                    title: suburb,
                    href: `/matress-cleaning-melbourne/${params.location}`,
                },
            ]}
        />
    );
}
