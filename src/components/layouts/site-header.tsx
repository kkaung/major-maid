import Link from 'next/link';
import React from 'react';
import MobileNav from '@/components/layouts/mobile-nav';
import MainNav from '@/components/layouts/main-nav';
import { siteConfig } from '@/config/site';
import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

interface SiteHeaderProps extends HTMLAttributes<HTMLElement> {}

const SiteHeader = ({ ...props }: SiteHeaderProps) => {
    return (
        <header className={cn('w-full', props.className)} {...props}>
            <nav className="container flex h-14 items-center justify-between ">
                <div className="flex-1">
                    <Link aria-label="Home" href="/">
                        <span className="font-bold text-xl">
                            {siteConfig.name}
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
                            buttonVariants({ variant: 'secondary' }),
                            'rounded-full font-semibold text-lg text-slate-600'
                        )}
                    >
                        <Icons.circleUserRound
                            aria-hidden
                            className="w-5 h-5 mr-2"
                        />
                        Login
                    </Link>
                </nav>
            </nav>
        </header>
    );
};

SiteHeader.displayName = 'SiteHeader';

export { SiteHeader };
