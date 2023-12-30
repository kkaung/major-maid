import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface PopularQuestionsProps extends HTMLAttributes<HTMLElement> {}

export default function PopularQuestions({ ...props }: PopularQuestionsProps) {
    return (
        <section
            id="popular-questions"
            aria-labelledby="popular-questions-heading"
            className={cn(props.className)}
        >
            PopularQuestions
        </section>
    );
}
