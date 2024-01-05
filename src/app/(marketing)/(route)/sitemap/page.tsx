import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Shell } from '@/components/shell';
import React from 'react';

export default function Page() {
    return (
        <Shell>
            <PageHeader className="text-center">
                <PageHeaderHeading>Sitemap</PageHeaderHeading>
            </PageHeader>
            <section>
                <PageHeaderHeading as="h2" size="sm">
                    Pages
                </PageHeaderHeading>
                <ul></ul>
            </section>
        </Shell>
    );
}
