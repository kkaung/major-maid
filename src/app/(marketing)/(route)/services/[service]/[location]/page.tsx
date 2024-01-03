import { Icons } from '@/components/icons';
import GridPattern from '@/components/magicui/grid-pattern';
import Testmonials from '@/components/marketing/testmonials';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { cn, toTitleCase, unslugify } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import Stamp from '/public/assets/stamp.png';
import { type Metadata } from 'next';
import FAQs from '@/components/marketing/faqs';
import Satisfaction from '@/components/marketing/satisfaction';

interface PageProps {
    params: {
        location: string;
        service: string;
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

export default function Page({ params, ...props }: PageProps) {
    const service = toTitleCase(unslugify(params.service));

    const location = toTitleCase(unslugify(params.location));

    return (
        <Shell className="gap-16">
            <PageHeader className="relative text-center mx-auto">
                <div className="space-y-4">
                    <p className="font-semibold text-primary">
                        Trusted by 1000+ Families in Sydney
                    </p>
                    <div className="text-red-500 border border-red-500 inline-flex items-center p-2 rounded">
                        <Icons.fullGoogle
                            className="w-4 h-4 mr-1"
                            aria-hidden
                        />
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
                    {service} Service In
                    <span className="text-primary ml-1">{location}</span>
                </PageHeaderHeading>
                <div className="">
                    <div className="grid grid-cols-1 mt-6 gap-2 font-semibold text-lg sm:gap-4 sm:grid-cols-2">
                        <div>
                            <Icons.checkCircle
                                aria-hidden
                                className="w-4 h-4 mr-1 text-yellow-500 inline"
                                strokeWidth={3}
                            />
                            Trusted Cleaning
                        </div>
                        <div>
                            <Icons.checkCircle
                                aria-hidden
                                className="w-4 h-4 mr-1 text-yellow-500 inline"
                                strokeWidth={3}
                            />
                            200% Guarantee
                        </div>
                        <div>
                            <Icons.checkCircle
                                aria-hidden
                                className="w-4 h-4 mr-1 text-yellow-500 inline"
                                strokeWidth={3}
                            />
                            5-Star Rated Service
                        </div>
                        <div>
                            <Icons.checkCircle
                                aria-hidden
                                className="w-4 h-4 mr-1 text-yellow-500 inline stroke-3"
                                strokeWidth={3}
                            />
                            Happy Customers
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mx-auto">
                        <Image src={Stamp} width={90} height={90} alt="Stamp" />
                        <div className="space-y-2">
                            <Link
                                href="/booking"
                                className={cn(
                                    buttonVariants({
                                        size: 'lg',
                                    }),
                                    'font-semibold px-8 h-12 uppercase rounded-full'
                                )}
                            >
                                Get A Quote & Book Online
                            </Link>
                            <p className="text-xs text-primary text-center">
                                TAKES LESS THAN 60 SECONDS
                            </p>
                        </div>
                    </div>
                    <p className="text-muted-foreground">
                        Easily customize and book your {location} cleaning
                        service online in just 60 seconds using our
                        user-friendly booking form.
                    </p>
                </div>
                <GridPattern className="-z-10 stroke-gray-200 dark:stroke-gray-800  opacity-50 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]" />
            </PageHeader>
            <Testmonials className="max-w-md w-full mx-auto" />
            <FAQs location={location} />
            <Satisfaction />
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Services', href: '/services' },
                    { title: service, href: `/services/${params.service}` },
                    {
                        title: location,
                        href: `/services/${params.service}/${params.location}`,
                    },
                ]}
                dottable={false}
            />
        </Shell>
    );
}
