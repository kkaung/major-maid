import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import React from 'react';

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    {
                        title: 'Frequently Asked Questions',
                        href: '/frequently-asked-questions',
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
