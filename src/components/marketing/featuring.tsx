import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Homely from '/public/assets/images/homely.png';
import Yahoo from '/public/assets/images/yahoo.png';
import RealHomes from '/public/assets/images/realhomes.png';

interface FeaturingProps extends HTMLAttributes<HTMLElement> {}

export default function Featuring({ ...props }: FeaturingProps) {
    return (
        <section
            id="featuring"
            aria-labelledby="featuring-heading"
            className={cn(props.className)}
        >
            <p className="text-xl font-medium text-center mb-2">
                As
                <span className="font-bold mx-1">Seen</span>On
            </p>
            <div className="grid grid-cols-3 mx-auto max-w-md">
                <Image width={150} height={150} src={Yahoo} alt="Yahoo" />
                <Image width={150} height={100} src={Homely} alt="Homely" />
                <Image
                    width={150}
                    height={100}
                    src={RealHomes}
                    alt="ReamHomes"
                />
            </div>
        </section>
    );
}
