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
            title: 'Sydney',
            items: [
                { title: 'Redfern', href: '/sydney/redfern' },
                { title: 'Waterloo', href: '/sydney/waterloo' },
                { title: 'Newtown', href: '/sydney/newtown' },
                { title: 'Paramatta', href: '/sydney/paramatta' },
                { title: 'Bondi', href: '/sydney/bondi' },
                { title: 'Bronte', href: '/sydney/bronte' },
                { title: 'North Sydney', href: '/sydney/north-sydney' },
                { title: 'Surry Hill', href: '/sydney/surry-hills' },
                { title: 'Double Bay', href: '/sydney/double-bay' },
                { title: 'Ryde', href: '/sydney/ryde' },
                { title: 'All Locations', href: '/locations' },
            ],
        },
        {
            title: 'Melbourne',
            items: [
                { title: 'East Melbourne', href: '/melbourne/east-melbourne' },
                { title: 'Brighton', href: '/melbourne/brighton' },
                { title: 'Canterbury', href: '/melbourne/canterbury' },
                { title: 'Surrey Hills', href: '/melbourne/surrey-hills' },
                { title: 'Toorak', href: '/melbourne/toorok' },
                { title: 'Malvern', href: '/melbourne/malvern' },
                { title: 'Kew', href: '/melbourne/kew' },
                { title: 'Armadale', href: '/melbourne/armadale' },
                { title: 'Balwyn', href: '/melbourne/balwyn' },
                { title: 'South Yarra', href: '/melbourne/south-yarra' },
                { title: 'All Locations', href: '/locations' },
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
                    title: 'Regular Cleaing',
                    href: '/services/regular-cleaning',
                },
                {
                    title: 'Deep Cleaing',
                    href: '/services/deep-cleaning',
                },
                {
                    title: 'End Lease Cleaning',
                    href: '/services/end-lease-cleaning',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/services/oven-cleaning',
                },
                {
                    title: 'Bond Cleaning',
                    href: '/services/bond-cleaning',
                },
                {
                    title: 'Apartment Cleaning',
                    href: '/services/apartment-cleaning',
                },
                {
                    title: 'Office Cleaning',
                    href: '/services/office-cleaning',
                },
                {
                    title: 'NDIS Cleaning',
                    href: '/services/ndis-cleaning',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/services/carpet-cleaning',
                },
                {
                    title: 'Move In - Move Out Cleaning',
                    href: '/services/move-in-move-out-cleaning',
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
};

export const siteServices = [
    {
        title: 'House Cleaing',
        href: '/services/house-cleaning',
    },
    {
        title: 'Regular Cleaing',
        href: '/services/regular-cleaning',
    },
    {
        title: 'Deep Cleaing',
        href: '/services/deep-cleaning',
    },
    {
        title: 'End Lease Cleaning',
        href: '/services/end-lease-cleaning',
    },
    {
        title: 'Oven Cleaning',
        href: '/services/oven-cleaning',
    },
    {
        title: 'Bond Cleaning',
        href: '/services/bond-cleaning',
    },
    {
        title: 'Office Cleaning',
        href: '/services/office-cleaning',
    },
    {
        title: 'NDIS Cleaning',
        href: '/services/ndis-cleaning',
    },
    {
        title: 'Carpet Cleaning',
        href: '/services/carpet-cleaning',
    },
    {
        title: 'NDIS Cleaning',
        href: '/services/office-cleaning',
    },
    {
        title: 'Move In - Move Out Cleaning',
        href: '/services/move-in-move-out-cleaning',
    },
    {
        title: 'Tile Cleaning',
        href: '/services/move-in-move-out-cleaning',
    },
    {
        title: 'One Off Cleaning',
        href: '/services/one-off-cleaning',
    },
    {
        title: 'Strata Cleaning',
        href: '/services/one-off-cleaning',
    },
    {
        title: 'Residental Window Cleaning',
        href: '/services/residental-window-cleaning',
    },
    {
        title: 'Construction Cleaning',
        href: '/services/residental-window-cleaning',
    },
];
