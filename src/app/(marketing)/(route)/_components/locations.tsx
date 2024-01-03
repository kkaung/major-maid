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
    const city = cities.find(city => city.title === props.city);

    return (
        <section
            id="locations"
            aria-labelledby="locations-heading"
            className={cn(props.className, 'text-center space-y-6')}
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
            <div className='space-y-6'>
                {cities.map((city, idx) => {
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
                        <div key={idx}>
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
                            <div className="space-y-4">
                                <ul>
                                    <Marquee
                                        pauseOnHover
                                        className="transform-cpu  [--duration:50s]"
                                    >
                                        {firstRow.map((r, idx) => (
                                            <Link href={r.href} key={idx}>
                                                <li className="px-4 py-1 whitespace-nowrap bg-primary text-white font-xl font-bold italic">
                                                    {r.title}
                                                </li>
                                            </Link>
                                        ))}
                                    </Marquee>
                                </ul>
                                <ul>
                                    <Marquee
                                        pauseOnHover
                                        className="transform-cpu  [--duration:50s]"
                                    >
                                        {secondRow.map((r, idx) => (
                                            <Link href={r.href} key={idx}>
                                                <li className="px-4 py-1 whitespace-nowrap bg-primary text-white font-xl font-bold italic">
                                                    {r.title}
                                                </li>
                                            </Link>
                                        ))}
                                    </Marquee>
                                </ul>
                                <ul>
                                    <Marquee
                                        pauseOnHover
                                        className="transform-cpu  [--duration:50s]"
                                    >
                                        {thirdRow.map((r, idx) => (
                                            <Link href={r.href} key={idx}>
                                                <li className="px-4 py-1 whitespace-nowrap bg-primary text-white font-xl font-bold italic">
                                                    {r.title}
                                                </li>
                                            </Link>
                                        ))}
                                    </Marquee>
                                </ul>
                            </div>
                        </div>
                    );
                })}
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

