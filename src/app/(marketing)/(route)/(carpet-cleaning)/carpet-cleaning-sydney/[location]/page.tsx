import React from 'react';
import { getCityFromPathname } from '@/lib/next';
import { type Metadata } from 'next';
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
        title: `Top Rated Carpet Cleaning ${suburb} | Carpet Stain Removal`,
        description: `Book your carpet cleaning service with our trusted carpet cleaning technicians. Book and schedule your carpet cleaning job online in less than 60 seconds.`,
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
                { title: 'Carpet Cleaning', href: '/carpet-cleaning-sydney' },
                {
                    title: suburb,
                    href: `/carpet-cleaning-sydney/${params.location}`,
                },
            ]}
        />
    );
}
