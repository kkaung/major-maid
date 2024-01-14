import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://facebook.com/',
    instagram: 'https://github.com/',
    twitter: 'https://twitter.com/',
    pinterest: 'https://pinterest.com/',
    tiktok: 'https://tiktok.com',
    temblr: 'https://temblr.com',
    linkin: 'https://linkin.com',
    youtube: 'https://youtube.com',
};

export const siteConfig = {
    logo: 'MajorMaid',
    name: 'Major Maid',
    title: `Australia's Premium House Cleaning Serivce`,
    description: '',
    url: 'https://majormaid.com.au',
    ogImage: 'https://majormaid.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Sydney',
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
                    title: 'Office Cleaning',
                    href: '/office-cleaning-sydney',
                },
                {
                    title: 'Move In - Move Out',
                    href: '/move-in-move-out-cleaning-sydney',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-sydney',
                },
                {
                    title: 'NDIS Cleaning',
                    href: '/ndis-cleaning-sydney',
                },
                {
                    title: 'Apartment Cleaning',
                    href: '/apartment-cleaning-sydney',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-sydney',
                },
                {
                    title: 'Construction Cleaning',
                    href: '/construction-cleaning-sydney',
                },
            ],
        },
        {
            title: 'Melbourne',
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
                    title: 'Office Cleaning',
                    href: '/office-cleaning-melbourne',
                },
                {
                    title: 'Move In - Move Out',
                    href: '/move-in-move-out-cleaning-melbourne',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-melbourne',
                },
                {
                    title: 'NDIS Cleaning',
                    href: '/ndis-cleaning-melbourne',
                },
                {
                    title: 'Apartment Cleaning',
                    href: '/apartment-cleaning-melbourne',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-melbourne',
                },
                {
                    title: 'Construction Cleaning',
                    href: '/construction-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/pricing',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Sydney',
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
                    title: 'Move In - Move Out',
                    href: '/move-in-move-out-cleaning-sydney',
                },
            ],
        },
        {
            title: 'Melbourne',
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
                    title: 'Move In - Move Out',
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
                { title: 'Locations', href: '/locations' },
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

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [
    {
        title: 'House Cleaning',
        slug: 'house-cleaning',
        icon: 'house',
    },
    {
        title: 'Regular Cleaning',
        slug: 'regular-cleaning',
    },
    {
        title: 'Deep Cleaning',
        slug: 'deep-cleaning',
    },
    {
        title: 'End Lease Cleaning',
        slug: 'end-lease-cleaning',
    },
    {
        title: 'Oven Cleaning',
        slug: 'oven-cleaning',
    },
    {
        title: 'Bond Cleaning',
        slug: 'bond-cleaning',
    },
    {
        title: 'Office Cleaning',
        slug: 'office-cleaning',
        icon: 'building',
    },
    {
        title: 'NDIS Cleaning',
        slug: 'ndis-cleaning',
    },
    {
        title: 'Carpet Cleaning',
        slug: '/carpet-cleaning',
        icon: 'carpet',
    },
    {
        title: 'Move In - Move Out',
        slug: '/move-in-move-out-cleaning',
    },
    {
        title: 'Tile Cleaning',
        slug: '/tile-cleaning',
    },
];
