'use client';

import { Card, CardContent } from '@/components/ui/card';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';

const testmonials = [
    {
        name: '',
        image: '',
        body: '',
    },
    {},
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
                className="max-w-full"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="space-y-4 flex items-center justify-center flex-col">
                                <p className="leading-tight text-center">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Facere, aspernatur!
                                </p>
                                <div className="flex flex-col justify-center items-center">
                                    <div className="mb-2 flex items-center">
                                        <Icons.starFull className="w-4 h-4 text-yellow-400" />
                                        <Icons.starFull className="w-4 h-4 text-yellow-400" />
                                        <Icons.starFull className="w-4 h-4 text-yellow-400" />
                                        <Icons.starFull className="w-4 h-4 text-yellow-400" />
                                        <Icons.starFull className="w-4 h-4 text-yellow-400" />
                                    </div>
                                    <Avatar>
                                        <AvatarImage
                                            src="https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1599566150163-29194dcaad36%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D3387%26q%3D80&w=256&q=75"
                                            className="object-cover bg-center"
                                        />
                                    </Avatar>
                                    <div className="mt-1">Alex</div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
}
