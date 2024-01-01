import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { cities } from '@/config/location';
import { cn, slugify } from '@/lib/utils';

interface LocationsProps extends HTMLAttributes<HTMLElement> {}

export default function Locations({ ...props }: LocationsProps) {
    return (
        <section
            id="locations"
            aria-labelledby="locations-heading"
            className={cn(props.className, 'text-center')}
        >
            <h2 className="text-2xl font-semibold">Where We Service</h2>
            <h3 className="text-muted-foreground text-sm mt-2">
                We clean all throughout Sydney. See the featured suburbs in each
                city that we service:
            </h3>
            <section className="mt-6">
                {cities.map((city, idx) => (
                    <div key={idx}>
                        <h4 className="font-semibold text-xl mb-4">Sydney</h4>
                        <ul className="grid grid-cols-3 gap-x-6 sm:grid-cols-6">
                            {city.items.map((suburb, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={`/${slugify(
                                            city.title
                                        )}/${slugify(suburb.title)}`}
                                        className="text-muted-foreground hover:underline"
                                    >
                                        {suburb.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <div className="mt-6">
                <Link
                    href="/locations"
                    className={cn(
                        buttonVariants({ variant: 'outline', size: 'sm' })
                    )}
                >
                    See All
                    <Icons.arrowRight className="ml-1 w-4 h-4 stroke-2 inline transition-all group-hover:translate-x-1" />
                    <span className="sr-only">See All Blog Posts</span>
                </Link>
            </div>
        </section>
    );
}
