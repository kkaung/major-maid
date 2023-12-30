import { PropsWithChildren } from 'react';

import { SiteHeader } from '@/components/layouts/site-header';
import SiteFooter from '@/components/layouts/site-footer';
import SiteBanner from '@/components/layouts/site-banner';

export default async function Layout({ children }: PropsWithChildren) {
    return (
        <div className="relative flex min-h-screen flex-col">
            <SiteBanner />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}
