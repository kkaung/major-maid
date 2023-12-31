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
        {
            title: 'Services',
            items: [
                {
                    title: 'House Cleaing',
                    href: '/services/house-cleaning',
                },
                {
                    title: 'End Lease Cleaning',
                    href: '/services/end-lease-cleaning',
                },
                {
                    title: 'Bond Cleaning',
                    href: '/services/bond-cleaning',
                },
                {
                    title: 'Office Cleaning',
                    href: '/services/office-cleaning',
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
            title: 'Pricing',
            href: '/pricing',
        },
        {
            title: 'Checklist',
            href: '/checklist',
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
                { title: 'Paramatta', href: '/sydney/paramatta' },
                { title: 'Bondi', href: '/sydney/bondi' },
                { title: 'Bronte', href: '/sydney/bronte' },
                { title: 'North Sydney', href: '/sydney/north-sydney' },
                { title: 'See All Locations', href: '/locations' },
            ],
        },
        {
            title: 'Services',
            items: [
                {
                    title: 'House Cleaing',
                    href: '/services/house-cleaning',
                },
                {
                    title: 'End Lease Cleaning',
                    href: '/services/end-lease-cleaning',
                },
                {
                    title: 'Bond Cleaning',
                    href: '/services/bond-cleaning',
                },
                {
                    title: 'Office Cleaning',
                    href: '/services/office-cleaning',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'About Us', href: '/about' },
                { title: 'Blog', href: '/blog' },
                { title: 'Reviews', href: '/reviews' },
                { title: 'Pricing', href: '/pricing' },
                { title: 'Careers', href: '/careers' },
                { title: 'Privacy Policy', href: '/privacy-policy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
    ] satisfies FooterItem[],
};
