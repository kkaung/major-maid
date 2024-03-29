import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Insider from '/public/assets/images/insider.webp';
import RealHomes from '/public/assets/images/realhomes.webp';
import Yahoo from '/public/assets/images/yahoo.webp';
import NineNews from '/public/assets/images/9news.webp';
import SevenNews from '/public/assets/images/7news.webp';
import NewsCom from '/public/assets/images/newscomau.webp';

interface FeaturingProps extends HTMLAttributes<HTMLElement> {}

export default function Featuring({ ...props }: FeaturingProps) {
    return (
        <section
            id="featuring"
            aria-labelledby="featuring-heading"
            className={cn(props.className, 'py-6')}
        >
            <div className="flex flex-col gap-x-12 gap-y-2 container max-w-4xl mx-auto sm:items-center sm:flex-row">
                <p className="text-lg font-medium grayscale">
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
                        src={Insider}
                        alt="Insider"
                        className="grayscale"
                    />
                    <Image
                        width={100}
                        height={100}
                        src={NewsCom}
                        alt="News Com"
                        className="grayscale"
                    />
                    <Image
                        width={100}
                        height={100}
                        src={RealHomes}
                        alt="Real Homes"
                        className="grayscale"
                    />
                    <Image
                        width={100}
                        height={100}
                        src={Yahoo}
                        alt="Yahoo"
                        className="grayscale"
                    />
                </div>
            </div>
        </section>
    );
}
