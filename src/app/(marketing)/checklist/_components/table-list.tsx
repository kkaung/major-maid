import { Icons } from '@/components/icons';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import React from 'react';

interface DataTableItem {
    area: string;
    isGeneralClean: boolean;
    isDeepClean: boolean;
    isEndLease: boolean;
}

export interface TableData {
    title: string;
    items: DataTableItem[];
}

interface TableListProps {
    data: TableData[];
}

export default function TableList({ data }: TableListProps) {
    return (
        <div className="space-y-16">
            {data.map(data => (
                <section key={data.title}>
                    <section className="border rounded-3xl max-w-3xl mx-auto w-full overflow-hidden">
                        <Table>
                            <TableHeader className="bg-muted">
                                <TableRow>
                                    <TableHead className="w-[320px]">
                                        {data.title}
                                    </TableHead>
                                    <TableHead>General Clean</TableHead>
                                    <TableHead>Deep Clean</TableHead>
                                    <TableHead>End Of Lease</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {data.items.map(item => (
                                    <TableRow key={item.area}>
                                        <TableCell className="font-medium">
                                            {item.area}
                                        </TableCell>
                                        <TableCell>
                                            {item.isGeneralClean ? (
                                                <Icons.check
                                                    aria-hidden
                                                    className="w-4 h-4 text-primary"
                                                    strokeWidth={3}
                                                />
                                            ) : (
                                                <Icons.x
                                                    className="w-4 h-4 text-primary"
                                                    strokeWidth={3}
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {item.isDeepClean ? (
                                                <Icons.check
                                                    aria-hidden
                                                    className="w-4 h-4 text-primary"
                                                    strokeWidth={3}
                                                />
                                            ) : (
                                                <Icons.x
                                                    className="w-4 h-4 text-primary"
                                                    strokeWidth={3}
                                                />
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {item.isEndLease ? (
                                                <Icons.check
                                                    aria-hidden
                                                    className="w-4 h-4 text-primary"
                                                    strokeWidth={3}
                                                />
                                            ) : (
                                                <Icons.x
                                                    className="w-4 h-4 text-primary"
                                                    strokeWidth={3}
                                                />
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </section>
                </section>
            ))}
        </div>
    );
}
