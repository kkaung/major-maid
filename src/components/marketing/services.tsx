import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

const services = [
    {
        title: 'House Cleaning',
        href: '/services/house-cleaning',
    },
    {
        title: 'Regular Cleaning',
        href: '/services/regular-cleaning',
    },
    {
        title: 'Deep Cleaning',
        href: '/services/deep-cleaning',
    },
    {
        title: 'End Lease Cleaning',
        href: '/services/end-lease-cleaning',
    },
    {
        title: 'Oven Cleaning',
        href: '/services/end-lease-cleaning',
    },
    {
        title: 'Bond Cleaning',
        href: '/services/bond-cleaning',
    },
    {
        title: 'Office Cleaning',
        href: '/services/office-cleaning',
    },
];

interface ServicesProps extends HTMLAttributes<HTMLElement> {}

export default function Services({ ...props }: ServicesProps) {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className={cn(props.className, 'text-center')}
        >
            <h2 className="text-xl font-semibold">
                Cleaning Services We Offer
            </h2>
            <p className="text-muted-foreground mt-2">
                Whatever your cleaning needs are, we&apos;ve got you covered.
            </p>
            <ul className="grid grid-cols-3 gap-2 mt-6">
                {services.map((service, idx) => (
                    <li key={idx} className="relative">
                        <h1>{service.title}</h1>
                        <Link
                            href={`${service.href}`}
                            className="absolute inset-0"
                        >
                            <span className="sr-only">View Service</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
