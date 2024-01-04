import Link from 'next/link';
import React from 'react';
import MobileNav from '@/components/layouts/mobile-nav';
import MainNav from '@/components/layouts/main-nav';
import { siteConfig } from '@/config/site';
import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

interface SiteHeaderProps extends HTMLAttributes<HTMLElement> {}

const SiteHeader = ({ ...props }: SiteHeaderProps) => {
    return (
        <header
            className={cn(
                'w-full border-b sticky top-0 z-50 bg-background/90 backdrop-blur-lg backdrop-saturate-200',
                props.className
            )}
            {...props}
        >
            <nav className="flex container h-16 items-center justify-between sm:h-14">
                <div className="flex items-center gap-6 flex-1 sm:gap-8 sm:mr-12 md:flex-grow-0">
                    <MobileNav
                        mainNavItems={siteConfig.mainNav}
                        sidebarNavItems={siteConfig.mainNav}
                    />
                    <Link aria-label="Home" href="/">
                        <span className="font-bold text-2xl italic text-primary">
                            {siteConfig.logo}
                        </span>
                    </Link>
                </div>
                <nav className="flex lg:flex-1 gap-4 items-center justify-between">
                    <MainNav items={siteConfig.mainNav} />
                    <div className="gap-4 flex items-center">
                        <Link
                            href="/"
                            className={cn(
                                'hidden text-foreground/60 hover:text-primary lg:block'
                            )}
                        >
                            Login
                        </Link>
                        <Button
                            variant="outline"
                            className={cn(
                                'hidden rounded-full bg-primary/5 text-primary border-none transition-colors lg:flex hover:text-primary'
                            )}
                        >
                            <Icons.phone
                                aria-hidden
                                className="w-4 h-4 mr-1 stroke-3"
                            />
                            1300 245 417{' '}
                            <span className="sr-only">Phone Number</span>
                        </Button>
                        <Link
                            className={cn(
                                buttonVariants({}),
                                'rounded-full font-bold animate-shimmer bg-[linear-gradient(110deg,#2463EB,45%,#7ba4f6,55%,#2463EB)] bg-[length:200%_100%] transition-colors'
                            )}
                            href="/booking"
                        >
                            <span className="hidden mr-1 sm:inline">
                                Get a quote &
                            </span>
                            Book online
                        </Link>
                    </div>
                </nav>
            </nav>
        </header>
    );
};

SiteHeader.displayName = 'SiteHeader';

export { SiteHeader };
