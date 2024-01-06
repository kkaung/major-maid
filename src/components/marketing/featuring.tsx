import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Homely from '/public/assets/images/homely.png';
import Yahoo from '/public/assets/images/yahoo.png';
import RealHomes from '/public/assets/images/realhomes.png';
import NineNews from '/public/assets/images/9news.webp';
import SevenNews from '/public/assets/images/7news.webp';
import NewsCom from '/public/assets/images/newscomau.webp';

interface FeaturingProps extends HTMLAttributes<HTMLElement> {}

export default function Featuring({ ...props }: FeaturingProps) {
    return (
        <section
            id="featuring"
            aria-labelledby="featuring-heading"
            className={cn(props.className, 'bg-secondary/40 py-6')}
        >
            <div className="flex flex-col gap-x-12 gap-y-4 container max-w-4xl mx-auto sm:items-center sm:flex-row">
                <p className="text-lg font-medium z-10 md:text-xl">
                    As
                    <span className="font-bold mx-1">Seen</span>On:
                </p>
                <div className="grid grid-cols-3 gap-2 items-center justify-center text-center z-0 relative flex-wrap xs:flex">
                    <Image
                        width={100}
                        height={100}
                        src={NineNews}
                        alt="Nine News"
                        className="grayscale"
                    />
                    <Image
                        width={100}
                        height={100}
                        src={SevenNews}
                        alt="Seven News"
                        className="grayscale"
                    />
                    <Image
                        width={100}
                        height={100}
                        src={NewsCom}
                        alt="Seven News"
                        className="grayscale"
                    />
                    <Image
                        width={100}
                        height={100}
                        src={NewsCom}
                        alt="Seven News"
                        className="grayscale"
                    />
                    <Image
                        width={100}
                        height={100}
                        src={NewsCom}
                        alt="Seven News"
                        className="grayscale"
                    />
                </div>
            </div>
        </section>
    );
}
