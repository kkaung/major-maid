'use client';

import { toast } from 'sonner';
import { HTMLAttributes, useTransition } from 'react';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormDescription,
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
import { bookingSchema } from '@/lib/validations/booking';
import { cn } from '@/lib/utils';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

type Inputs = z.infer<typeof bookingSchema>;

interface Props {
    onSuccess?: () => void;
}

export function BookingForm({ onSuccess }: Props) {
    const [isPending, startTransition] = useTransition();

    const form = useForm<Inputs>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {},
    });

    const onSubmit = (values: Inputs) => {};

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                Please Select One of Our Main Services Regions
                                To Get Started!
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Separator />
                <div>
                    <h5 className="font-medium text-lg mb-1">
                        Additional Information
                    </h5>
                    <p className="text-muted-foreground text-xs mb-4">
                        I authorize Simply Spotless to charge my credit card
                        above for agreed upon purchases. I understand that my
                        information will be saved to file for further
                        transactions on my account.
                    </p>
                    <FormField
                        control={form.control}
                        name="havePets"
                        render={({ field }) => (
                            <FormItem className="space-y-2">
                                <FormLabel>Do you have pets?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="yes" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="no" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Separator />
                <div>
                    <FormField
                        control={form.control}
                        name="instruction"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Special Instructions</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Separator />
                <div className="space-y-2">
                    <h5 className="font-medium text-lg">Payment Details</h5>
                    <p className="text-muted-foreground text-xs">
                        I authorize Simply Spotless to charge my credit card
                        above for agreed upon purchases. I understand that my
                        information will be saved to file for further
                        transactions on my account.
                    </p>
                </div>
                <Separator />
                <p className="text-muted-foreground text-xs">
                    By clicking the Book Now button you are agreeing to our
                    <Link
                        href="/terms"
                        className="text-primary/80 underline mx-1"
                    >
                        Terms of Service
                    </Link>
                    and
                    <Link
                        href="/privacy"
                        className="text-primary/80 underline mx-1"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
                <Button
                    type="submit"
                    className="w-full text-lg capitalize font-semibold"
                    disabled={isPending}
                >
                    {isPending && (
                        <Icons.spinner
                            className="mr-2 h-4 w-4 stroke-2 animate-spin"
                            aria-hidden="true"
                        />
                    )}
                    Book Now
                    <span className="sr-only">Submit</span>
                </Button>
            </form>
        </Form>
    );
}

interface BookingSummeryProps extends HTMLAttributes<HTMLElement> {}

export function BookingSummery({ ...props }: BookingSummeryProps) {
    return (
        <Card className={cn(props.className)}>
            <CardHeader>
                <CardTitle>Your Booking Summary</CardTitle>
            </CardHeader>
            <CardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores recusandae
            </CardContent>
            <Separator />
            <CardFooter className="flex justify-between py-2">
                <div className="font-medium">Total (Including GST)</div>
                <div className="text-primary font-semibold text-3xl">$129</div>
            </CardFooter>
        </Card>
    );
}
