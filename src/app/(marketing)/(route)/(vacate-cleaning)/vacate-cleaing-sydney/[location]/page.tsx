import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { type Metadata } from 'next';

import Content from '../../_components/content';
import { toTitleCase, unslugify } from '@/lib/utils';

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
        title: `Vacate Cleaning ${suburb} | 100% Bond Back Guarantee`,
        description:
            'Book your vacate cleaning service with our trusted cleaners. We guarantee you will get 100% of your bond back.Book online in under 60 seconds.',
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
                { title: city, href: '/vacate-cleaning-sydney' },
            ]}
        />
    );
}
