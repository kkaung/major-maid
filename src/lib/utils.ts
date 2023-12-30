import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type User } from '@clerk/nextjs/server';

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

export function getUserEmail(user: User | null) {
    const email =
        user?.emailAddresses?.find(e => e.id === user.primaryEmailAddressId)
            ?.emailAddress ?? '';

    return email;
}
