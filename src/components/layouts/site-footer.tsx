import Link from 'next/link';
import { siteConfig } from '@/configs/site';
import { Shell } from '@/components/shell';
import { Icons } from '@/components/icons';
import { cn, toTitleCase, unslugify } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

import FooterTabs from '../footer-tabs';

interface SiteFooterProps extends HTMLAttributes<HTMLElement> {
    location?: string;
}

export default async function SiteFooter({
    location = 'Sydney',
    ...props
}: SiteFooterProps) {
    return (
        <footer className="w-full bg-[#0C0E1F] relative overflow-hidden border-t">
            <Shell as="div">
                <section
                    id="footer-content"
                    aria-labelledby="footer-content-heading"
                    className="text-gray-400 flex flex-col gap-6 lg:flex-row lg:gap-8"
                >
                    <section
                        id="footer-branding"
                        aria-labelledby="footer-branding-heading"
                        className="w-full lg:max-w-sm"
                    >
                        <Link
                            aria-label="Home"
                            href="/"
                            className="text-2xl italic flex items-center space-x-2 text-white"
                        >
                            <span className="font-bold">{siteConfig.logo}</span>
                        </Link>
                        <p className="my-4 max-w-xs text-xs font-light text-slate-400 md:text-sm">
                            {siteConfig.name} is here to transform your house
                            into home with our professional house cleaning
                            services.
                        </p>
                        <div className="flex flex-col mt-2 space-y-2 text-slate-400">
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.mail
                                    className="w-4 h-4 mr-1 inline"
                                    aria-hidden
                                />
                                <span className="sr-only">Email</span>
                                {siteConfig.business.email}
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.phone
                                    className="w-4 h-4 mr-1 inline"
                                    aria-hidden
                                />
                                <span className="sr-only">Phone Number</span>
                                {siteConfig.business.phone}
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.mapPin
                                    aria-hidden
                                    className="w-4 h-4 mr-1 inline"
                                />
                                <span className="sr-only">Office Address</span>
                                {siteConfig.business.address}
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.clock
                                    aria-hidden
                                    className="w-4 h-4 mr-1 inline"
                                />
                                <span className="sr-only">
                                    Business Opening Hour
                                </span>
                                {siteConfig.business.openingHour}
                            </div>
                        </div>
                    </section>
                    <section
                        id="footer-links"
                        aria-labelledby="footer-links-heading"
                        className="grid flex-1 grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
                    >
                        {siteConfig.footerNav.map(item => (
                            <div key={item.title} className="space-y-3">
                                <div className="text-base font-medium text-white">
                                    {item.title}
                                </div>
                                <ul className="space-y-2">
                                    {item.items.map(link => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-slate-400 transition-colors leading-none hover:text-slate-50"
                                                title={`${toTitleCase(
                                                    unslugify(link.href)
                                                )}`}
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                </section>
                <FooterTabs />
                <section
                    id="footer-bottom"
                    aria-labelledby="footer-bottom-heading"
                    className="flex flex-col  space-x-3 sm:flex-row sm:items-center"
                >
                    <div className="flex-1 text-left text-xs leading-tight text-muted-foreground text-slate-500">
                        © {new Date().getFullYear()} {siteConfig.name}.
                        <span>All rights reserved.</span>
                    </div>
                    <div className="mt-3 flex items-center gap-6 text-slate-400">
                        <Link
                            aria-label="Facebook"
                            target="_blank"
                            rel="nofollow"
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
                            rel="nofollow"
                            href={siteConfig.links.twitter}
                        >
                            <Icons.twitter aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Youtube"
                            target="_blank"
                            rel="nofollow"
                            href={siteConfig.links.youtube}
                        >
                            <Icons.youtube aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Linkin"
                            target="_blank"
                            rel="nofollow"
                            href={siteConfig.links.linkin}
                        >
                            <Icons.linkin aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Pinterest"
                            target="_blank"
                            rel="nofollow"
                            href={siteConfig.links.pinterest}
                        >
                            <Icons.pinterest aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Yelp"
                            target="_blank"
                            rel="nofollow"
                            href={siteConfig.links.yelp}
                        >
                            <Icons.yelp aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            href={siteConfig.links.azcleaning}
                            target="_blank"
                            title="AZ Cleaning - End of Lease Cleaning and Bond Cleaning in Melbourne"
                        >
                            <Icons.sparkles aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            href={siteConfig.links.rzcleaning}
                            target="_blank"
                            title="RZ Cleaning - End of Lease Cleaning And Bond Cleaning in Sydney"
                        >
                            <Icons.personStanding
                                aria-hidden
                                className="h-4 w-4"
                            />
                        </Link>
                        <Link
                            href={siteConfig.links.bondtoclean}
                            target="_blank"
                            title="BondToClean - Top Rated End of Lease Cleaning and Bond Cleaning in Australia"
                        >
                            <Icons.sword aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            href={siteConfig.links.bondtoclean}
                            target="_blank"
                            title="End of Lease - Bond Cleaning in Sydney"
                        >
                            <Icons.sticker aria-hidden className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </Shell>
        </footer>
    );
}
