import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/profile.php?id=61555719702840',
    instagram: 'https://instagram.com/majormaid_au',
    twitter: 'https://twitter.com/majormaid_au',
    pinterest: 'https://www.pinterest.com.au/majormaid_aus',
    linkin: 'https://www.linkedin.com/company/majormaid',
    youtube: 'https://www.youtube.com/@MajorMaid-dq2wd',
    rzcleaning: 'https://rzcleaning.com.au',
    azcleaning: 'https://azcleaning.com.au',
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
            title: 'Our Service',
            items: [
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
                            title: 'Apartment Cleaning',
                            href: '/apartment-cleaning-sydney',
                        },
                        {
                            title: 'Oven Cleaning',
                            href: '/oven-cleaning-sydney',
                        },
                        {
                            title: 'Office Cleaning',
                            href: '/office-cleaning-sydney',
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
                            title: 'Apartment Cleaning',
                            href: '/apartment-cleaning-melbourne',
                        },
                        {
                            title: 'Oven Cleaning',
                            href: '/oven-cleaning-melbourne',
                        },
                        {
                            title: 'Office Cleaning',
                            href: '/office-cleaning-melbourne',
                        },
                    ],
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
                    title: 'Apartment Cleaning',
                    href: '/apartment-cleaning-sydney',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-sydney',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-sydney',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-sydney',
                },
                {
                    title: 'Vacate Cleaning',
                    href: '/vacate-cleaning-sydney',
                },
            ],
        },
        {
            title: 'Melbourne',
            items: [
                {
                    title: 'House Cleaning',
                    href: '/house-cleaning-melbourne',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-melbourne',
                },
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-melbourne',
                },
                {
                    title: 'End Lease Cleaning',
                    href: '/end-lease-cleaning-melbourne',
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
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-melbourne',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-melbourne',
                },
                {
                    title: 'Vacate Cleaning',
                    href: '/vacate-cleaning-melbourne',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'About Us', href: '/about' },
                { title: 'Services', href: '/cleaning-services' },
                { title: 'Blog', href: '/blog' },
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
        ratingValue: '4.9',
        ratingCount: '727',
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
        title: 'Office Cleaning',
        slug: 'office-cleaning',
        icon: 'building',
    },
];
