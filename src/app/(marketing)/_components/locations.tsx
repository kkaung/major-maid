import { buttonVariants } from '@/components/ui/button';
import { cities } from '@/config/location';
import { cn, slugify } from '@/lib/utils';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

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
                        <ul className="grid grid-cols-5 gap-x-6">
                            {city.items.map((suburb, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={`/${slugify(
                                            city.title
                                        )}/${slugify(suburb.title)}`}
                                        className="font-medium text-muted-foreground hover:underline"
                                    >
                                        {suburb.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
            <div>
                <Link
                    href="/sydney"
                    className={cn(
                        buttonVariants({ variant: 'outline' }),
                        'font-semibold'
                    )}
                >
                    View All Location
                    <span></span>
                </Link>
            </div>
        </section>
    );
}
