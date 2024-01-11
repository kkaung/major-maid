import React, { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { headingVariants } from '@/components/page-header';
import Balancer from 'react-wrap-balancer';
import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Icons } from '../icons';

const data = [
    {
        title: 'Vetted Cleaners',
        majorMaid: true,
        others: true,
    },
    {
        title: 'Experienced & Reliable Cleaners',
        majorMaid: true,
        others: false,
    },
    {
        title: 'Tailored Service, No Hidden Fees',
        majorMaid: true,
        others: false,
    },
    {
        title: '100% Money-Back guarantee',
        majorMaid: true,
        others: false,
    },
    {
        title: 'Schedule Online, Cancel Anytime',
        majorMaid: true,
        others: false,
    },
];

interface WhyUsProps extends HTMLAttributes<HTMLElement> {
    location?: string;
    service?: string;
}

export default function WhyUs({
    location = 'Sydney',
    service = 'Cleaing Service',
    ...props
}: WhyUsProps) {
    return (
        <section
            id="why-us"
            aria-labelledby="why-us-heading"
            className={cn(props.className, 'py-14 bg-primary')}
        >
            <div className="container mx-auto space-y-12">
                <div className="text-center">
                    <h2 className={cn(headingVariants({}), 'text-white')}>
                        <Balancer>Why Choose Major Maid?</Balancer>
                    </h2>
                </div>
                <div className="rounded-3xl p-4 max-w-3xl mx-auto bg-white">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="font-medium text-center text-xs sm:text-base leading-tight py-2">
                                    Benefits
                                </TableHead>
                                <TableHead className="text-xl font-bold text-primary italic text-center leading-tight sm:text-2xl md:text-3xl">
                                    <span>
                                        Major
                                        <br className="sm:hidden" />
                                        Maid
                                    </span>
                                </TableHead>
                                <TableHead className="font-medium text-center text-xs sm:text-base leading-tight py-2">
                                    Standard Cleaning <br /> Companines
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item, idx) => (
                                <TableRow key={idx}>
                                    <TableCell className="font-medium text-sm max-w-[200px]">
                                        <p>{item.title}</p>
                                    </TableCell>
                                    <TableCell className="">
                                        {item.majorMaid ? (
                                            <Icons.check
                                                className="w-6 h-6 text-green-500 mx-auto"
                                                aria-hidden
                                            />
                                        ) : (
                                            <Icons.close
                                                className="w-6 h-6 text-green-500 mx-auto"
                                                aria-hidden
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {item.others ? (
                                            <Icons.check
                                                className="w-6 h-6 text-green-500 mx-auto"
                                                aria-hidden
                                            />
                                        ) : (
                                            <Icons.close
                                                className="w-6 h-6 text-red-500 mx-auto"
                                                aria-hidden
                                            />
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    );
}
