import Link from 'next/link';
import React from 'react';
import MobileNav from '@/components/layouts/mobile-nav';
import MainNav from '@/components/layouts/main-nav';
import { siteConfig } from '@/config/site';
import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

interface SiteHeaderProps extends HTMLAttributes<HTMLElement> {}

const SiteHeader = ({ ...props }: SiteHeaderProps) => {
    return (
        <header className={cn('w-full', props.className)} {...props}>
            <nav className="container flex h-14 items-center justify-between ">
                <div className="flex-1">
                    <Link aria-label="Home" href="/">
                        <span className="font-bold text-2xl italic text-primary">
                            {siteConfig.logo}
                        </span>
                    </Link>
                </div>
                <nav className="flex gap-4">
                    <MobileNav
                        mainNavItems={siteConfig.mainNav}
                        sidebarNavItems={siteConfig.mainNav}
                    />
                    <MainNav items={siteConfig.mainNav} />
                    <Link
                        href="/"
                        className={cn(
                            buttonVariants({
                                variant: 'secondary',
                                size: 'lg',
                            }),
                            'rounded-full font-semibold text-lg text-primary'
                        )}
                    >
                        Login
                    </Link>
                </nav>
            </nav>
        </header>
    );
};

SiteHeader.displayName = 'SiteHeader';

export { SiteHeader };
