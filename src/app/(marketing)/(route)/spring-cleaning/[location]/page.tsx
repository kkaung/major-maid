import React from 'react';
import { getCity } from '@/lib/next';
import { toTitleCase, unslugify } from '@/lib/utils';
import { type Metadata } from 'next';
import Content from '../_components/content';

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
    const city = getCity();

    const location = toTitleCase(unslugify(params.location));

    const isCity = city === location;

    return (
        <Content
            city={''}
            suburb={''}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Home', href: '/' },
            ]}
        />
    );
}
