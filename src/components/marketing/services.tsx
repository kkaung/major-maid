import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { descriptionVariants, headingVariants } from '@/components/page-header';
import { Icons } from '@/components/icons';
import { siteServices } from '@/config/site';

interface ServicesProps extends HTMLAttributes<HTMLElement> {}

export default function Services({ ...props }: ServicesProps) {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className={cn(props.className, 'bg-secondary py-12 px-4')}
        >
            <div className="space-y-4 text-center">
                <h2 className={cn(headingVariants({}))}>
                    Cleaning Services We Offer in
                    <span className="text-primary ml-1">Sydney</span>
                </h2>
                <p
                    className={cn(
                        descriptionVariants({ size: 'sm' }),
                        'mx-auto'
                    )}
                >
                    Whatever your cleaning needs are, we&apos;ve got you
                    covered.
                </p>
            </div>
            <ul className="grid gap-2 mt-6 max-w-2xl w-full mx-auto grid-cols-2 sm:grid-cols-3">
                {siteServices.map((service, idx) => (
                    <li key={idx} className="relative">
                        <h3 className="font-semibold text-primary line-clamp-1">
                            {service.title}
                        </h3>
                        <Link
                            href={`${service.href}`}
                            className="absolute inset-0"
                        >
                            <span className="sr-only">View Service</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="text-center mt-6">
                <Link href="/services" className={'underline font-bold group'}>
                    See All
                    <Icons.arrowRight
                        aria-hidden
                        className="ml-1 w-4 h-4 inline transition-all group-hover:translate-x-1"
                        strokeWidth={3}
                    />
                    <span className="sr-only">See All Services</span>
                </Link>
            </div>
        </section>
    );
}
