import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { Shell } from '@/components/shell';
import { Icons } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default async function SiteFooter() {
    return (
        <footer className="w-full bg-secondary relative overflow-hidden">
            <Shell as="div">
                <section
                    id="footer-content"
                    aria-labelledby="footer-content-heading"
                    className="flex flex-col gap-10 lg:flex-row lg:gap-20"
                >
                    <section
                        id="footer-branding"
                        aria-labelledby="footer-branding-heading"
                        className="w-full lg:max-w-md xl:max-w-xl"
                    >
                        <Link
                            aria-label="Home"
                            href="/"
                            className="flex items-center space-x-2"
                        >
                            <span className="font-bold">{siteConfig.name}</span>
                        </Link>
                        <p className="mt-4 max-w-sm text-xs font-light text-muted-foreground md:text-sm">
                            Free anime streaming website that allows you to
                            watch chinese | donghua animes online.
                        </p>
                        <div className="flex flex-col">
                            <p
                                className={cn(
                                    'cursor-pointer',
                                    buttonVariants({ variant: 'link' })
                                )}
                            >
                                <Icons.mail
                                    className="w-4 h-4 mr-1"
                                    aria-hidden
                                />
                                contact@majormaid.com.au
                            </p>
                            <p
                                className={cn(
                                    'cursor-pointer',
                                    buttonVariants({ variant: 'link' })
                                )}
                            >
                                <Icons.phone
                                    className="w-4 h-4 mr-1"
                                    aria-hidden
                                />
                                +61 430281937
                            </p>
                        </div>
                    </section>
                    <section
                        id="footer-links"
                        aria-labelledby="footer-links-heading"
                        className="grid flex-1 grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-3"
                    >
                        {siteConfig.footerNav.map(item => (
                            <div key={item.title} className="space-y-3">
                                <h4 className="text-base font-semibold">
                                    {item.title}
                                </h4>
                                <ul className="space-y-2">
                                    {item.items.map(link => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                target={
                                                    link?.external
                                                        ? '_blank'
                                                        : undefined
                                                }
                                                rel={
                                                    link?.external
                                                        ? 'noreferrer'
                                                        : undefined
                                                }
                                                className="text-sm text-muted-foreground font-medium transition-colors hover:text-foreground"
                                            >
                                                {link.title}
                                                <span className="sr-only">
                                                    {link.title}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                </section>
                <Separator />
                <section
                    id="footer-bottom"
                    aria-labelledby="footer-bottom-heading"
                    className="flex items-center space-x-3"
                >
                    <div className="flex-1 text-left text-xs leading-tight text-muted-foreground">
                        © {new Date().getFullYear()} {siteConfig.name}.
                        <span>All rights reserved.</span>
                    </div>
                    <div className="mt-3 flex items-center gap-6 text-muted-foreground">
                        <Link aria-label="" target="_blank" href="/">
                            <Icons.twitter className="h-4 w-4" />
                        </Link>
                        <Link aria-label="" target="_blank" href="/">
                            <Icons.facebook className="h-4 w-4" />
                        </Link>
                        <Link aria-label="" target="_blank" href="/">
                            <Icons.reddit className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </Shell>
        </footer>
    );
}
