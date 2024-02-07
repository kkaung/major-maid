import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/configs/site';
import { Icons } from '@/components/icons';

interface WhyDifferentProps extends HTMLAttributes<HTMLElement> {}

export default function WhyDifferent({ ...props }: WhyDifferentProps) {
    return (
        <section
            id="why-different"
            aria-labelledby="why-different-heading"
            className={cn(props.className, 'space-y-12')}
            {...props}
        >
            <h2 className="text-4xl font-bold text-center">
                What Makes Us Different?
            </h2>
            <div className="flex font-medium leading-tight">
                <div className="flex-1">
                    <ul className="border rounded-xl">
                        <li className="py-4 px-6 border-b">
                            Trusted & Vetted Cleaners
                        </li>
                        <li className="py-4 px-6 border-b">
                            Tailored Service, No Hidden Fees
                        </li>
                        <li className="py-4 px-6 border-b">
                            100% Money-Back guarantee
                        </li>
                        <li className="py-4 px-6 border-b">
                            Schedule Online, Cancel Anytime
                        </li>
                        <li className="px-6 py-4">
                            Trusted by 1000+ Sydney Homes
                        </li>
                    </ul>
                </div>
                <div className="flex-1 max-w-[200px] bg-primary text-white z-10 rounded-xl shadow">
                    <ul className="text-center">
                        <li className="text-2xl font-semibold">
                            {siteConfig.name}
                        </li>
                        <li>
                            <Icons.check
                                aria-hidden
                                className="w-8 h-8 inline"
                            />
                        </li>
                        <li>
                            <Icons.check
                                aria-hidden
                                className="w-8 h-8 inline"
                            />
                        </li>
                        <li>
                            <Icons.check
                                aria-hidden
                                className="w-8 h-8 inline"
                            />
                        </li>
                        <li>
                            <Icons.check
                                aria-hidden
                                className="w-8 h-8 inline"
                            />
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <ul className="text-center border rounded-xl">
                        <li className="py-3 px-6 border-b">
                            Standard Cleaning Companies
                        </li>
                        <li className="py-3 px-6 border-b">
                            <Icons.x aria-hidden className="inline w-8 h-8" />
                        </li>
                        <li className="py-3 px-6 border-b">
                            <Icons.x aria-hidden className="inline w-8 h-8" />
                        </li>
                        <li className="py-3 px-6 border-b">
                            <Icons.x aria-hidden className="inline w-8 h-8" />
                        </li>
                        <li className="py-3 px-6">
                            <Icons.x aria-hidden className="inline w-8 h-8" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center">
                <Link
                    href="/booking"
                    className={cn(
                        buttonVariants({
                            size: 'lg',
                        }),
                        'font-semibold px-8 h-12 uppercase rounded-full'
                    )}
                >
                    Book Online Now
                </Link>
            </div>
        </section>
    );
}
