import { Metadata } from 'next';
import React from 'react';
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
        title: `NDIS Cleaning Service`,
        description: ``,
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
                { title: 'NDIS Cleaning', href: '/ndis-cleaning-sydney' },
                {
                    title: suburb,
                    href: `/ndis-cleaning-sydney/${params.location}`,
                },
            ]}
        />
    );
}
