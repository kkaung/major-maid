import { z } from 'zod';

export const bookingSchema = z.object({
    location: z.enum(['Cambelltown']),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    service: z.enum(['standard', 'deeep-clean', 'end-lease']),
    frequency: z.enum(['one-time', 'weekly', 'fortnightly']),
    clearnerParking: z.enum(['driveway']),
    havePets: z.enum(['yes', 'no']),
    date: z.date(),
    instruction: z.string().optional(),
});
