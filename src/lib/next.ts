import { headers } from 'next/headers';
import { toTitleCase } from './utils';

export const getCity = () => {
    const headersList = headers();

    return headersList.get('x-vercel-ip-city') ?? 'Sydney';
};

export const getCityFromPathname = () => {
    const _headers = headers();

    const pathname = _headers.get('x-pathname') || '';

    const pathSegments = pathname.split('/');

    return toTitleCase(pathSegments[1].split('-').pop()!);
};
