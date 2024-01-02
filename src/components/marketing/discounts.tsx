import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface DiscountsProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default function Discounts({
    location = 'Sydney',
    ...props
}: DiscountsProps) {
    return (
        <section
            id="discounts"
            aria-label="discounts-heading"
            className={cn(props.className)}
        >
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-semibold text-center">
                    Regular Cleaning Discounts
                </h2>
                <p className="text-muted-foreground max-w-lg w-full mx-auto">
                    Need a regular cleaning service? We offer exclusive
                    discounts and a team of highly experienced house cleaners in
                    <span className="ml-1 text-primary font-medium">
                        {location}
                    </span>
                    .
                </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2 mt-12 text-white font-medium mx-auto w-full max-w-sm">
                <li className="bg-primary px-4 py-1 flex items-center gap-2 rounded-xl">
                    <span className="w-14 h-14 text-center flex justify-center items-center border border-yellow-300 border-dotted rounded-full leading-none font-semibold text-yellow-300">
                        15 % <br /> off
                    </span>
                    Weekly Cleaning
                </li>
                <li className="bg-primary px-4 py-2 flex items-center gap-2 rounded-xl">
                    <span className="w-14 h-14 flex justify-center text-center items-center border border-yellow-300 border-dotted rounded-full leading-none font-semibold text-yellow-300">
                        10 % <br /> off
                    </span>
                    Weekly Cleaning
                </li>
                <li className="bg-primary px-4 py-2 flex items-center gap-2 rounded-xl">
                    <span className="w-14 h-14 flex justify-center items-center text-center border border-yellow-300 border-dotted rounded-full leading-none font-semibold text-yellow-300">
                        5 % <br /> off
                    </span>
                    Monthly Cleaning
                </li>
            </ul>
        </section>
    );
}
