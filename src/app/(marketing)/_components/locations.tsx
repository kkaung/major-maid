import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { Icons } from '@/components/icons';
import { cities } from '@/config/location';
import { cn } from '@/lib/utils';
import { descriptionVariants, headingVariants } from '@/components/page-header';
import Marquee from '@/components/magicui/marquee';

interface LocationsProps extends HTMLAttributes<HTMLElement> {
    city: string;
}

export default function Locations({ ...props }: LocationsProps) {
    const city = cities.find(city => city.title === props.city)!;

    const firstRow = city.items.slice(0, city.items.length / 3);
    const secondRow = city.items.slice(
        (1 * city.items.length) / 3,
        (2 * city.items.length) / 3
    );
    const thirdRow = city.items.slice(
        (2 * city.items.length) / 3,
        city.items.length
    );

    return (
        <section
            id="locations"
            aria-labelledby="locations-heading"
            className={cn(
                props.className,
                'text-center space-y-6 w-full max-w-6xl mx-auto'
            )}
        >
            <div className="space-y-2">
                <h2 className={cn(headingVariants({}))}>Where We Service</h2>
                <p
                    className={cn(
                        descriptionVariants({ size: 'sm' }),
                        'mx-auto'
                    )}
                >
                    We clean all throughout Sydney. See the featured suburbs in
                    each city that we service:
                </p>
            </div>
            <div className="space-y-6">
                <Link href={'/sydney'}>
                    <h4
                        className={cn(
                            headingVariants({ size: 'sm' }),
                            'italic mb-4 underline'
                        )}
                    >
                        {city.title}
                    </h4>
                </Link>
                <div className="flex flex-col gap-4">
                    <Marquee
                        pauseOnHover
                        className="transform-cpu [--duration:50s]"
                    >
                        {firstRow.map((r, idx) => (
                            <div
                                key={idx}
                                className="px-4 py-1  bg-primary text-white font-xl font-bold italic"
                            >
                                <Link
                                    href={`/house-cleaning/${r.slug}`}
                                    key={idx}
                                    className=""
                                >
                                    {r.title}
                                </Link>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            <div className="text-center">
                <Link href="/locations" className={'underline font-bold group'}>
                    See All
                    <Icons.arrowRight
                        aria-hidden
                        className="ml-1 w-4 h-4 inline transition-all group-hover:translate-x-1"
                        strokeWidth={3}
                    />
                    <span className="sr-only">See All Locations</span>
                </Link>
            </div>
        </section>
    );
}
