'use client';

import { useTransition } from 'react';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';

const quoteSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    service: z.string(),
});

type Inputs = z.infer<typeof quoteSchema>;

interface Props {
    onSuccess?: () => void;
}

export function QuoteForm({ onSuccess }: Props) {
    const [isPending, startTransition] = useTransition();

    const router = useRouter();

    const form = useForm<Inputs>({
        resolver: zodResolver(quoteSchema),
        defaultValues: {},
        mode: 'onChange',
    });

    const onSubmit = (values: Inputs) => {
        startTransition(() => {
            router.push('/booking');
        });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col justify-center items-center gap-6 sm:flex-row"
            >
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="sr-only">
                                First Name
                            </FormLabel>
                            <FormControl>
                                <Input className="text-primary" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="sr-only">Last Name</FormLabel>
                            <FormControl>
                                <Input className="text-primary" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="sr-only">Last Name</FormLabel>
                            <FormControl>
                                <Input className="text-primary" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="sr-only">Last Name</FormLabel>
                            <FormControl>
                                <Input className="text-primary" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    variant="outline"
                    size="lg"
                    className="inline-block text-primary rounded-full font-semibold w-40 hover:text-primary"
                >
                    {isPending && (
                        <Icons.spinner
                            className="mr-2 h-4 w-4 stroke-2 animate-spin"
                            aria-hidden="true"
                        />
                    )}
                    Get a quote & Book online
                </Button>
            </form>
        </Form>
    );
}
