import GridPattern from '@/components/magicui/grid-pattern';
import Satisfaction from '@/components/marketing/satisfaction';
import Testmonials from '@/components/marketing/testmonials';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

export default function Page() {
    return (
        <Shell>
            <PageHeader className="relative text-center">
                <PageHeaderHeading size="lg">
                    {siteConfig.name} Reviews
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    See below what our customers had to say about their{' '}
                    {siteConfig.name} experience.
                </PageHeaderDescription>
                <div>
                    <Link
                        href="/booking"
                        className={cn(
                            buttonVariants({
                                size: 'lg',
                            }),
                            'font-semibold px-8 h-12 rounded-full animate-shimmer bg-[linear-gradient(110deg,#2463EB,45%,#7ba4f6,55%,#2463EB)] bg-[length:200%_100%] transition-colors'
                        )}
                    >
                        Get a quote & Book online
                    </Link>
                </div>
            </PageHeader>
            <Testmonials className="max-w-md w-full mx-auto" />
            <Satisfaction />
        </Shell>
    );
}
