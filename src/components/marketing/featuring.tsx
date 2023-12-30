import React, { HTMLAttributes } from 'react';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

interface FeaturingProps extends HTMLAttributes<HTMLElement> {}

export default function Featuring({ ...props }: FeaturingProps) {
    return (
        <section
            id="featuring"
            aria-labelledby="featuring-heading"
            className={cn(props.className)}
        >
            <p className="text-xl font-medium text-center">
                As
                <span className="font-bold mx-1">Seen</span>On
            </p>
            <div>
                <Icons.homesly className="w-4 h-4" />
            </div>
        </section>
    );
}
