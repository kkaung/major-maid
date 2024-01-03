import { Icons } from '@/components/icons';
import { siteConfig, siteServices } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

interface AboutUsProps extends HTMLAttributes<HTMLElement> {}

export default function AboutUs({ ...props }: AboutUsProps) {
    return (
        <section
            id="about-us"
            aria-labelledby="about-us-heading"
            className={cn(
                props.className,
                'bg-secondary rounded-xl p-4 space-y-2'
            )}
        >
            <h2
                className={cn(
                    'font-bold leading-tight tracking-tighter lg:leading-[1.1] text-2xl'
                )}
            >
                About {siteConfig.name}
            </h2>
            <div className="space-y-2">
                <p className="text-sm">
                    <Link href="/" className="text-primary mr-1 font-medium">
                        {siteConfig.name}
                    </Link>
                    is NOT your typical Sydney metropolitan home cleaning
                    company. MaidForYou is bringing maid services into the 21st
                    century by building a company we would want to do business
                    with ourselves.
                </p>
                <p className="text-sm">Click below to explore our services:</p>
                <ul className="text-primary text-sm space-y-2">
                    {siteServices.map((service, idx) => (
                        <Link
                            href={service.href}
                            key={idx}
                            className="hover:underline"
                        >
                            <li key={idx}>{service.title}</li>
                        </Link>
                    ))}
                </ul>
                <div className="flex items-center gap-4 pt-6">
                    <Link
                        aria-label="Facebook"
                        target="_blank"
                        href={siteConfig.links.facebook}
                    >
                        <Icons.facebook aria-hidden className="h-4 w-4" />
                    </Link>
                    <Link
                        aria-label="Instagram"
                        target="_blank"
                        href={siteConfig.links.instagram}
                    >
                        <Icons.instagram aria-hidden className="h-4 w-4" />
                    </Link>
                    <Link
                        aria-label="Twitter"
                        target="_blank"
                        href={siteConfig.links.twitter}
                    >
                        <Icons.twitter aria-hidden className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
