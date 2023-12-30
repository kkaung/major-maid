import type { FooterItem, Locale, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    twitter: 'https://twitter.com/sadmann17',
    facebook: 'https://github.com/sadmann7/skateshop',
    instagram: 'https://github.com/sadmann7/skateshop',
};

export const siteConfig = {
    name: 'Major Maids',
    description:
        'An open source e-commerce skateshop build with everything new in Next.js 13.',
    url: 'https://skateshop.sadmn.com',
    ogImage: 'https://skateshop.sadmn.com/opengraph-image.png',
    mainNav: [
        { title: 'Home', href: '/' },
        {
            title: 'Services',
            items: [
                {
                    title: 'House Cleaing',
                    href: '/services',
                },
                {
                    title: 'End Lease Cleaning',
                    href: '/services',
                },
                {
                    title: 'NDIS Cleaning',
                    href: '/services',
                },
                {
                    title: 'Office Cleaning',
                    href: '/services',
                },
            ],
        },
        {
            title: 'Location',
            items: [
                {
                    title: 'Campbelltown',
                    href: '/locations/cambelltown',
                },
            ],
        },
        {
            title: 'FAQs',
            href: '/frequently-asked-questions',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Sydney',
            items: [
                { title: 'Redfern', href: '/sydney/redfern' },
                { title: 'Waterloo', href: '/sydney/waterloo' },
                { title: 'Newtown', href: '/sydney/newtown' },
                { title: 'Bondi', href: '/sydney/bondi' },
                { title: 'See All Locations', href: '/locations' },
            ],
        },
        {
            title: 'Services',
            items: [
                { title: 'Redfern', href: '/sydney/redfern' },
                { title: 'Waterloo', href: '/sydney/waterloo' },
                { title: 'Newtown', href: '/sydney/newtown' },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'About Us', href: '/about' },
                { title: 'Blog', href: '/blog' },
                { title: 'Privacy Policy', href: '/privacy-policy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
    ] satisfies FooterItem[],
};
