import { headingVariants } from '@/components/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { locations } from '@/configs/location';
import { cn, unslugify } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Link from 'next/link';

interface PopularLocationProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function PopularLocations({
    location = 'Sydney',
    ...props
}: PopularLocationProps) {
    const tabs = [
        {
            title: 'Sydney',
            value: 'sydney',
        },
        {
            title: 'Melbourne',
            value: 'melbourne',
        },
    ];

    tabs.sort((a, b) =>
        a.title === location ? -1 : b.title === location ? 1 : 0
    );

    return (
        <section
            id="popular-location"
            aria-labelledby="popular-locations-heading"
            className={cn(props.className, 'space-y-6 py-12')}
        >
            <h2 className={cn(headingVariants({ size: 'sm' }))}>
                Popular Locations
            </h2>
            <div>
                <Tabs
                    defaultValue={`${location!.toLowerCase()}`}
                    className="relative mt-6 w-full"
                >
                    <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                        {tabs.map(tab => (
                            <div
                                role="none"
                                key={tab.title}
                                className={cn(
                                    'border-b-3 border-transparent py-1 data-[state=active]:border-primary'
                                )}
                            >
                                <TabsTrigger
                                    className={cn(
                                        'relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=active]:bg-transparent'
                                    )}
                                    value={tab.value}
                                >
                                    {tab.title}
                                </TabsTrigger>
                            </div>
                        ))}
                    </TabsList>
                    {locations.map(city => (
                        <TabsContent
                            key={city.title}
                            value={city.title.toLowerCase()}
                        >
                            <section className="mt-6">
                                <ul className="grid grid-cols-3 gap-x-6 gap-y-2 md:grid-cols-6">
                                    {city.items.map(city => (
                                        <li
                                            key={city.title}
                                            className="text-xs font-normal transition-all hover:scale-[1.02] hover:text-primary"
                                        >
                                            <Link
                                                href={`/bond-cleaning/${unslugify(
                                                    city.title
                                                )}`}
                                                title={`Bond Cleaning ${city.title}`}
                                            >
                                                <span className="sr-only">
                                                    Bond Cleaning
                                                </span>
                                                {city.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
