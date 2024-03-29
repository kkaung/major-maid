'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
import { locations } from '@/configs/location';
import Link from 'next/link';
import { Collapsible, CollapsibleTrigger } from './ui/collapsible';

export default function FooterTabs() {
    const [tab, setTab] = useState(0);
    const [isOpen, setIsOpen] = React.useState(false);

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
        <section>
            <Tabs
                defaultValue="sydney"
                className="relative mt-6 w-full size-full overflow-auto"
            >
                <ScrollArea
                    orientation="horizontal"
                    className="pb-2.5 w-full overflow-auto"
                    scrollBarClassName="h-2"
                >
                    <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0 h-10 border-slate-600">
                        {tabs.map(tab => (
                            <div
                                role="none"
                                key={tab.value}
                                className={cn('border-b-2 border-transparent')}
                            >
                                <TabsTrigger
                                    value={tab.value}
                                    className={cn(
                                        'relative h-10 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-4 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:bg-transparent data-[state=active]:border-b-primary data-[state=active]:text-white/80 data-[state=active]:shadow-none'
                                    )}
                                >
                                    {tab.title}
                                </TabsTrigger>
                            </div>
                        ))}
                    </TabsList>
                </ScrollArea>
                <div>
                    {locations.map(l => (
                        <TabsContent
                            key={l.title}
                            value={l.title.toLowerCase()}
                        >
                            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                                <div
                                    className={cn(
                                        'relative h-[120px] overflow-hidden',
                                        {
                                            'h-full': isOpen,
                                        }
                                    )}
                                >
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
                                        {l.items.map(i => (
                                            <li key={i.title}>
                                                <Link
                                                    href={`/house-cleaner-${l.title.toLowerCase()}/${
                                                        i.slug
                                                    }`}
                                                    title={`House Cleaner ${i.title}`}
                                                    className="text-sm text-muted-foreground"
                                                >
                                                    {i.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div
                                        className={cn(
                                            'absolute z-10 bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0C0E1F] via-[#0C0E1F]/80 translate-y-1',
                                            {
                                                'from-transparent via-transparent h-0 -z-10':
                                                    isOpen,
                                            }
                                        )}
                                    />
                                </div>
                                <div className="text-center py-6">
                                    <CollapsibleTrigger>
                                        <div className="font-medium text-sm text-gray-400">
                                            {isOpen ? 'View Less' : 'View More'}
                                        </div>
                                        <span className="sr-only">Toggle</span>
                                    </CollapsibleTrigger>
                                </div>
                            </Collapsible>
                        </TabsContent>
                    ))}
                </div>
            </Tabs>
        </section>
    );
}
