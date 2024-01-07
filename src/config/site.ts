import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    twitter: 'https://twitter.com/sadmann17',
    facebook: 'https://github.com/sadmann7/skateshop',
    instagram: 'https://github.com/sadmann7/skateshop',
    pinterest: '',
    tiktok: '',
    temblr: '',
    linkin: '',
};

export const siteConfig = {
    logo: 'MajorMaid',
    name: 'Major Maid',
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
                    href: '/house-cleaning',
                },
                {
                    title: 'Regular Cleaing',
                    href: '/regular-cleaning',
                },
                {
                    title: 'Deep Cleaing',
                    href: '/deep-cleaning',
                },
                {
                    title: 'End Lease Cleaning',
                    href: '/end-lease-cleaning',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning',
                },
                {
                    title: 'Bond Cleaning',
                    href: '/bond-cleaning',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning',
                },
                {
                    title: 'Move In - Move Out Cleaning',
                    href: '/move-in-move-out-cleaning',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning',
                },
                {
                    title: 'NDIS Cleaning',
                    href: '/ndis-cleaning',
                },
                {
                    title: 'Apartment Cleaning',
                    href: '/apartment-cleaning',
                },
            ],
        },
        {
            title: 'Where We Serve',
            href: '/locations',
        },
        {
            title: 'Pricing',
            href: '/pricing',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Sydney Services',
            items: [
                {
                    title: 'House Cleaing',
                    href: '/house-cleaning-sydney',
                },
                {
                    title: 'Regular Cleaing',
                    href: '/regular-cleaning-sydney',
                },
                {
                    title: 'Deep Cleaing',
                    href: '/deep-cleaning-sydney',
                },
                {
                    title: 'End Lease Cleaning',
                    href: '/end-lease-cleaning-sydney',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-sydney',
                },
                {
                    title: 'Bond Cleaning',
                    href: '/bond-cleaning-sydney',
                },
                {
                    title: 'Apartment Cleaning',
                    href: '/apartment-cleaning-sydney',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-sydney',
                },
                {
                    title: 'NDIS Cleaning',
                    href: '/ndis-cleaning-sydney',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-sydney',
                },
                {
                    title: 'Move In - Move Out Cleaning',
                    href: '/move-in-move-out-cleaning-sydney',
                },
            ],
        },
        {
            title: 'Melbourne Services',
            items: [
                {
                    title: 'House Cleaing',
                    href: '/house-cleaning-melbourne',
                },
                {
                    title: 'Regular Cleaing',
                    href: '/regular-cleaning-melbourne',
                },
                {
                    title: 'Deep Cleaing',
                    href: '/deep-cleaning-melbourne',
                },
                {
                    title: 'End Lease Cleaning',
                    href: '/end-lease-cleaning-melbourne',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-melbourne',
                },
                {
                    title: 'Bond Cleaning',
                    href: '/bond-cleaning-melbourne',
                },
                {
                    title: 'Apartment Cleaning',
                    href: '/apartment-cleaning-melbourne',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-melbourne',
                },
                {
                    title: 'NDIS Cleaning',
                    href: '/ndis-cleaning-melbourne',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-melbourne',
                },
                {
                    title: 'Move In - Move Out Cleaning',
                    href: '/move-in-move-out-cleaning-melbourne',
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
                { title: 'Checklist', href: '/checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@majormaid.com.au',
        phone: '1300 245 417',
        address: '7/24-26 Blaxland Road, Ryde, NSW 2112',
        openingHour: 'Mon – Sat: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.8',
        ratingCount: '528',
    },
};

export const siteServices = [
    {
        title: 'House Cleaing',
        href: '/house-cleaning',
    },
    {
        title: 'Regular Cleaing',
        href: '/regular-cleaning',
    },
    {
        title: 'Deep Cleaing',
        href: '/deep-cleaning',
    },
    {
        title: 'End Lease Cleaning',
        href: '/end-lease-cleaning',
    },
    {
        title: 'Oven Cleaning',
        href: '/oven-cleaning',
    },
    {
        title: 'Bond Cleaning',
        href: '/bond-cleaning',
    },
    {
        title: 'Office Cleaning',
        href: '/office-cleaning',
    },
    {
        title: 'NDIS Cleaning',
        href: '/ndis-cleaning',
    },
    {
        title: 'Carpet Cleaning',
        href: '/carpet-cleaning',
    },
    {
        title: 'Move In - Move Out Cleaning',
        href: '/move-in-move-out-cleaning',
    },
    {
        title: 'Tile Cleaning',
        href: '/move-in-move-out-cleaning',
    },
    {
        title: 'One Off Cleaning',
        href: '/one-off-cleaning',
    },
    {
        title: 'Strata Cleaning',
        href: '/one-off-cleaning',
    },
    {
        title: 'Residental Window Cleaning',
        href: '/residental-window-cleaning',
    },
    {
        title: 'Construction Cleaning',
        href: '/residental-window-cleaning',
    },
];
