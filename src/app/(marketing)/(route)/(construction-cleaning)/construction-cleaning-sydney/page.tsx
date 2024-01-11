import React from 'react';
import { getCityFromPathname } from '@/lib/next';

export const runtime = 'edge';

import Content from '../_components/content';

export default function Page() {
    const city = getCityFromPathname();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                {
                    title: 'Construction Cleaning',
                    href: '/construction-cleaing-sydney',
                },
            ]}
        />
    );
}
