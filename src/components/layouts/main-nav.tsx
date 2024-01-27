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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MainNavProps {
    items?: MainNavItem[];
}

export default function MainNav({ items }: MainNavProps) {
    const segment = useSelectedLayoutSegment();

    return (
        <div className="hidden gap-6 z-30 lg:flex">
            <NavigationMenu>
                <NavigationMenuList>
                    {items?.map(item =>
                        item?.items ? (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuTrigger
                                    className={cn(
                                        'h-auto bg-transparent font-normal text-base capitalize hover:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent'
                                        // item?.href?.startsWith(`/${segment}`)
                                        //     ? 'text-primary'
                                        //     : 'text-foreground/60'
                                    )}
                                >
                                    {item.title}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <Tabs defaultValue={item.items[0].title}>
                                        <div className="w-[400px] flex gap-6">
                                            <div className="space-y-6 py-4 pl-4 bg-secondary flex flex-col">
                                                <div className="space-y-1 pr-4">
                                                    <h5 className="font-semibold text-xl leading-tight text-foreground">
                                                        What are you <br />
                                                        looking for?
                                                    </h5>
                                                    <p className="text-muted-foreground text-sm">
                                                        Pick a type of service
                                                    </p>
                                                </div>
                                                <TabsList className="flex flex-col space-y-2 flex-1 p-0">
                                                    {item.items.map(item => (
                                                        <TabsTrigger
                                                            key={item.title}
                                                            value={item.title}
                                                            className="w-full justify-start text-base rounded-l-xl rounded-r-none h-10"
                                                        >
                                                            {item.title}
                                                        </TabsTrigger>
                                                    ))}
                                                </TabsList>
                                            </div>
                                            <div className="py-4 pr-4">
                                                {item.items.map(item => (
                                                    <TabsContent
                                                        key={item.title}
                                                        value={item.title}
                                                    >
                                                        <ul className="space-y-2">
                                                            {item.items?.map(
                                                                item => (
                                                                    <li
                                                                        key={
                                                                            item.title
                                                                        }
                                                                        className="text-foreground/70 hover:underline hover:text-foreground"
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                item.href!
                                                                            }
                                                                        >
                                                                            {
                                                                                item.title
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </TabsContent>
                                                ))}
                                            </div>
                                        </div>
                                    </Tabs>
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
                                                'h-auto font-normal text-base bg-transparent text-muted-foreground hover:bg-transparent hover:text-primary'
                                                // item.href.startsWith(
                                                //     `/${segment}`
                                                // )
                                                //     ? 'text-foreground'
                                                //     : 'text-foreground/60'
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
                        'block select-none space-y-1 text-sm rounded-md leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="leading-none text-foreground font-normal hover:underline">
                        {title}
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
