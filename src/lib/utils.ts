import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { env } from '@/env.mjs';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function slugify(str: string) {
    return str
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
}

export function unslugify(str: string) {
    str = str.replace(/^\//, '');

    return str.replace(/-/g, ' ');
}

export function truncate(str: string, length: number) {
    return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function toTitleCase(str: string) {
    return str.replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
    );
}

export function toSentenceCase(str: string) {
    return str
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
}

export function isMacOs() {
    if (typeof window === 'undefined') return false;

    return window.navigator.userAgent.includes('Mac');
}

export function formatDate(input: string | number): string {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

export function absoluteUrl(path: string) {
    return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export async function getPicture(city: string) {
    try {
        const p = new URLSearchParams();
        p.append('query', `${city} city architecture building`);
        p.append('per_page', '1');
        p.append('content_filter', 'high');
        p.append('orientation', 'landscape');

        const headers = {
            // get the Unsplash API key first
            Authorization: `Client-ID `,
        };

        const _url = 'https://api.unsplash.com/search/photos';
        const url = `${_url}?${p.toString()}`;
        const res = await fetch(url, { headers });
        const results = (await res.json()).results;

        for (const result of results) {
            return result.urls.regular as string;
        }
    } catch (e) {
        console.error('failed to getPicture', e);
    }

    return '';
}
