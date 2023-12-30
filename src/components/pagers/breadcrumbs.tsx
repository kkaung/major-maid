import * as React from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@radix-ui/react-icons';

import { cn, truncate } from '@/lib/utils';
import Dot from '@/components/dot';
import { Icons } from '@/components/icons';

interface BreadcrumbsProps {
    segments: {
        title: string;
        href: string;
    }[];
    separator?: React.ComponentType<{ className?: string }>;
    truncationLength?: number;
    dottable?: boolean;
}

export function Breadcrumbs({
    segments,
    separator,
    truncationLength = 0,
    dottable = true,
    ...props
}: BreadcrumbsProps) {
    const SeparatorIcon = separator ?? ChevronRightIcon;

    return (
        <nav
            aria-label="breadcrumbs"
            className="flex items-center text-sm font-medium text-muted-foreground"
        >
            {segments.map((segment, index) => {
                const isLastSegment = index === segments.length - 1;

                return (
                    <React.Fragment key={segment.href}>
                        <Link
                            aria-current={isLastSegment ? 'page' : undefined}
                            href={segment.href}
                            className={cn(
                                'truncate transition-colors hover:text-foreground',
                                isLastSegment
                                    ? 'text-foreground'
                                    : 'text-muted-foreground'
                            )}
                        >
                            {truncationLength > 0 && segment.title
                                ? truncate(segment.title, truncationLength)
                                : segment.title}
                        </Link>
                        {!isLastSegment && (
                            <>
                                {dottable ? (
                                    <Dot className="mx-2" aria-hidden="true" />
                                ) : (
                                    <SeparatorIcon
                                        className="w-3 h-3 mx-2 stroke-2"
                                        aria-hidden="true"
                                    />
                                )}
                            </>
                        )}
                    </React.Fragment>
                );
            })}
        </nav>
    );
}
