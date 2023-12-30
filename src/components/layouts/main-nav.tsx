'use client';

import React from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useSelectedLayoutSegment } from 'next/navigation';

import type { MainNavItem } from '@/types';
import { buttonVariants } from '@/components/ui/button';

interface MainNavProps {
    items?: MainNavItem[];
}

export default function MainNav({ items }: MainNavProps) {
    const segment = useSelectedLayoutSegment();

    return (
        <div className="hidden gap-6 lg:flex">
            <NavigationMenu>
                <NavigationMenuList>
                    {items?.map(item =>
                        item?.items ? (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuTrigger
                                    className={cn(
                                        'h-auto bg-transparent font-bold text-base capitalize hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent',
                                        item?.href?.startsWith(`/${segment}`)
                                            ? 'text-foreground'
                                            : 'text-foreground/60'
                                    )}
                                >
                                    {item.title}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-[300px] gap-3 p-4">
                                        {item.items.map(item => (
                                            <ListItem
                                                key={item.title}
                                                title={item.title}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ) : (
                            item.href && (
                                <NavigationMenuItem key={item.title}>
                                    <Link
                                        href={item.href}
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                'h-auto font-bold text-base bg-transparent text-muted-foreground hover:bg-transparent hover:text-foreground/80',
                                                item.href.startsWith(
                                                    `/${segment}`
                                                )
                                                    ? 'text-foreground'
                                                    : 'text-foreground/60'
                                            )}
                                        >
                                            {item.title}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )
                        )
                    )}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={String(href)}
                    className={cn(
                        'block select-none space-y-1 rounded-md  leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-lg font-semibold leading-none">
                        {title}
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
