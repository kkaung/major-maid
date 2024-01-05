import { type MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages } from 'contentlayer/generated';
import { locations } from '@/config/location';
import { siteServices } from '@/config/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`${page.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const allLocations: string[] = locations.reduce<string[]>(
        (result, city) => {
            result.push(city.title.toLowerCase());

            city.items.forEach(item => result.push(item.title.toLowerCase()));
            return result;
        },
        []
    );

    const allServices: string[] = siteServices.map(s =>
        s.title.toLocaleLowerCase()
    );

    const routes = ['', '/products', '/stores', '/build-a-board', '/blog'].map(
        route => ({
            url: absoluteUrl(route),
            lastModified: new Date().toISOString(),
        })
    );

    return [...routes, ...postsRoutes, ...pagesRoutes];
}
