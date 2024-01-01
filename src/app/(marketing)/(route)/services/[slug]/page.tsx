import { Icons } from '@/components/icons';
import GridPattern from '@/components/magicui/grid-pattern';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { toTitleCase, unslugify } from '@/lib/utils';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import FAQs from '@/components/marketing/faqs';
import Testmonials from '@/components/marketing/testmonials';
import Featuring from '@/components/marketing/featuring';

import Stamp from '../../../../../../public/assets/stamp.png';

interface PageProps {
    params: {
        slug: string;
    };
}

export default function Page({ params }: PageProps) {
    const title = toTitleCase(unslugify(params.slug));

    return (
        <Shell>
            <PageHeader className="relative text-center mx-auto">
                <div className="mb-6 space-y-2 mx-auto">
                    <p className="font-semibold text-primary">
                        Trusted by 1000+ Families in Sydney
                    </p>
                    <div className="text-red-500 border border-red-500 inline-flex items-center p-2 rounded">
                        <Icons.google className="w-4 h-4 mr-1" aria-hidden />
                        <span className="font-medium">5.0</span>
                        <span className="sr-only">Google Rating</span>
                        <div className="flex ml-1 text-yellow-400">
                            <Icons.starFull className="w-4 h-4 " aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                            <Icons.starFull className="w-4 h-4" aria-hidden />
                        </div>
                    </div>
                </div>
                <PageHeaderHeading>
                    {title} Service In
                    <span className="text-primary ml-1">Sydney</span>
                </PageHeaderHeading>
                <div className="grid grid-cols-2 gap-2 my-6 font-semibold text-lg">
                    <div>
                        <Icons.check
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline"
                            strokeWidth={3}
                        />
                        Trusted Cleaning
                    </div>
                    <div>
                        <Icons.check
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline"
                            strokeWidth={3}
                        />
                        200% Guarantee
                    </div>
                    <div>
                        <Icons.check
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline"
                            strokeWidth={3}
                        />
                        5-Star Rated Service
                    </div>
                    <div>
                        <Icons.check
                            aria-hidden
                            className="w-4 h-4 mr-1 text-yellow-500 inline stroke-3"
                            strokeWidth={3}
                        />
                        Happy Customers
                    </div>
                </div>
                <div className="flex items-center gap-2 mx-auto">
                    <Image src={Stamp} width={90} height={90} alt="Stamp" />
                    <Button
                        className="font-semibold px-8 py-1 uppercase rounded-full"
                        size="lg"
                    >
                        Get A Quote & Book Online
                    </Button>
                </div>
                <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
            </PageHeader>
            <Testmonials className="max-w-xl mx-auto w-full" />
            <Featuring />
            <FAQs />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    { title: title, href: `/services/${params.slug}` },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
