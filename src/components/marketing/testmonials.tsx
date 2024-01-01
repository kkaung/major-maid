'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import React, { type HTMLAttributes } from 'react';

const testmonials = [
    {
        name: 'Emily',
        body: '',
    },
    {
        name: 'Dora',
        body: '',
    },
    {
        name: 'Durden',
        body: '',
    },
    {
        name: 'Kelly',
        body: '',
    },
    {
        name: 'John',
        body: '',
    },
    {
        name: 'Alex',
        body: '',
    },
];

interface TestmonialsProps extends HTMLAttributes<HTMLElement> {}

export default function Testmonials({ ...props }: TestmonialsProps) {
    return (
        <section
            id="testmonials"
            aria-labelledby="testmonials-heading"
            className={cn(props.className)}
        >
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full mx-auto max-w-xs sm:mx-0 sm:max-w-md"
            >
                <CarouselContent>
                    {testmonials.map((testmonial, idx) => (
                        <CarouselItem key={idx} className="w-full">
                            <Card className="border-0 bg-secondary rounded-xl">
                                <CardHeader>
                                    <div className="flex justify-between">
                                        <div>
                                            <div className="flex gap-4">
                                                <Avatar>
                                                    <AvatarFallback className="bg-violet-500 text-white">
                                                        {testmonial.name
                                                            .charAt(0)
                                                            .toUpperCase()}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="mt-1 font-medium">
                                                    {testmonial.name}
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-2">
                                                <Icons.starFull
                                                    aria-hidden
                                                    className="w-4 h-4 text-yellow-400"
                                                />
                                                <Icons.starFull
                                                    aria-hidden
                                                    className="w-4 h-4 text-yellow-400"
                                                />
                                                <Icons.starFull
                                                    aria-hidden
                                                    className="w-4 h-4 text-yellow-400"
                                                />
                                                <Icons.starFull
                                                    aria-hidden
                                                    className="w-4 h-4 text-yellow-400"
                                                />
                                                <Icons.starFull
                                                    aria-hidden
                                                    className="w-4 h-4 text-yellow-400"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Icons.fullGoogle
                                                className="w-6 h-6 inline"
                                                aria-hidden
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="line-clamp-3">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Facere, aspernatur!
                                        adipisicing elit. Facere, aspernatur!
                                    </p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden sm:block">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </section>
    );
}
