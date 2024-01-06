import { headingVariants } from '@/components/page-header';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cities, locations } from '@/config/location';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

interface PopularLocationProps extends HTMLAttributes<HTMLElement> {}

export default function PopularLocations({ ...props }: PopularLocationProps) {
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

    return (
        <section
            id="popular-location"
            aria-labelledby="popular-locations-heading"
            className={cn(props.className, 'space-y-6')}
        >
            <h2 className={cn(headingVariants({ size: 'sm' }))}>
                Popular Locations
            </h2>
            <div>
                <Tabs defaultValue="sydney" className="relative mt-6 w-full">
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
                    {cities.map(city => (
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
                                                href={city.href}
                                                title={`House Cleaning ${city.title}`}
                                            >
                                                <span className="sr-only">
                                                    House Cleaning
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
