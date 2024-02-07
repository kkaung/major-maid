import React, { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { headingVariants } from '@/components/page-header';
import Balancer from 'react-wrap-balancer';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/configs/site';

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
        title: '100% Money-Back Guarantee',
        majorMaid: true,
        others: false,
    },
    {
        title: 'Simple Online Booking System',
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
            className={cn(props.className, 'py-12 bg-primary')}
        >
            <div className="container mx-auto space-y-12">
                <div className="relative text-center text-white space-y-4">
                    <h2 className={cn(headingVariants({}))}>
                        <Balancer>Why Choose Major Maid?</Balancer>
                    </h2>
                    <h3 className="font-medium">
                        {siteConfig.name} Is Not Your Average Cleaning Company
                    </h3>
                    <Icons.ppointed className="w-36 h-36  absolute left-1/2 z-20 -translate-x-full top-4" />
                </div>
                <div className="rounded-3xl p-4 max-w-3xl mx-auto bg-white">
                    <Table>
                        <TableHeader>
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="font-medium text-center text-xs sm:text-base leading-tight py-2">
                                    Benefits
                                </TableHead>
                                <TableHead className="relative text-xl font-bold text-primary italic text-center leading-tight sm:text-2xl md:text-3xl">
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
