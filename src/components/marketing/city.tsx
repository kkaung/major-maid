import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import { GoogleMapsEmbed } from '@next/third-parties/google';
import { env } from '@/env.mjs';

interface CityProps extends HTMLAttributes<HTMLElement> {
    name?: string;
}

export default function City({ name = 'Sydney', ...props }: CityProps) {
    return (
        <section
            id="city"
            aria-labelledby="city-heading"
            className={cn(props.className, 'grid grid-cols-1 sm:grid-cols-2')}
        >
            <div className='order-2 sm:order-1'>
                <GoogleMapsEmbed
                    apiKey={env.GM_API_KEY}
                    mode="place"
                    loading="lazy"
                    q="Brooklyn+Bridge,New+York,NY"
                    style={''}
                    allowfullscreen={true}
                />
            </div>
            <div className='order-1 sm:order-2'>
                <h2 className="font-semibold text-2xl mb-6">
                    Experience Sydney&apos;s Wonders While We Clean Your Home
                </h2>
                <p className="text-muted-foreground">
                    Sydney, the heart of Australia, is a bustling metropolis
                    that offers a myriad of experiences. From the iconic Sydney
                    Opera House to the engineering marvel that is the Sydney
                    Harbour Bridge, the city is a playground for culture,
                    history, and adventure. Don’t miss out on the Metro Theatre,
                    a hub for diverse musical experiences. Whether you’re into
                    shopping at the Queen Victoria Building or exploring the
                    Royal Botanic Garden, Sydney has something for everyone.
                </p>
                <br />
                <p className="text-muted-foreground">
                    Why spend your valuable time cleaning when you could be out
                    enjoying all that Sydney has to offer? That’s where Miracle
                    Maid comes in. Our Sydney team is just a call away, ready to
                    make your home as vibrant as the city itself. Go ahead,
                    immerse yourself in Sydney’s urban jungle; we’ve got the
                    cleaning covered.
                </p>
            </div>
        </section>
    );
}
