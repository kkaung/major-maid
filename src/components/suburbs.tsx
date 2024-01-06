'use client';

import { locations } from '@/config/location';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Balancer from 'react-wrap-balancer';
import { headingVariants } from './page-header';
import Link from 'next/link';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from './ui/button';

interface SuburbsProps extends HTMLAttributes<HTMLElement> {
    title: string;
    location?: string;
}

export default function Suburbs({
    title,
    location = 'Sydney',
    ...props
}: SuburbsProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const find = locations.find(l => l.title === location);

    if (!find) return;

    return (
        <section
            id="suburbs"
            aria-label="suburbs"
            className={cn(
                props.className,
                'space-y-12 max-w-5xl w-full mx-auto overflow-hidden'
            )}
        >
            <div className="text-center">
                <h2 className={cn(headingVariants({}))}>
                    <Balancer>Find Cleaners In Suburbs Of {location}</Balancer>
                </h2>
            </div>
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <div
                    className={cn(
                        'grid grid-cols-2 gap-x-6 gap-y-2 h-[300px] overflow-hidden text-center xs:grid-cols-3 sm:grid-cols-4 sm:text-left md:grid-cols-5 lg:grid-cols-6',
                        {
                            'h-full': isOpen,
                        }
                    )}
                >
                    {find.items.map(item => (
                        <Link
                            key={item.title}
                            href=""
                            title={`${title} ${location}`}
                            className="text-sm"
                        >
                            <span className="sr-only">{title}</span>
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="text-center py-6">
                    <CollapsibleTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary rounded-full hover:text-primary"
                        >
                            {isOpen ? 'View Less' : 'View More'}
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
            </Collapsible>
        </section>
    );
}
