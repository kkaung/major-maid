import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { Metadata } from 'next';
import { toTitleCase, unslugify } from '@/lib/utils';

import Content from '../../_components/content';

interface PageProps {
    params: {
        location: string;
    };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const city = getCityFromPathname();

    return {
        title: `Office Cleaning Service ${city} | Book Online`,
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
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-melbourne',
                },
            ]}
        />
    );
}
