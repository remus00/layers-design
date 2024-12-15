import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const classes = cva('h-12 rounded-full border px-6 font-medium', {
    variants: {
        variant: {
            primary: 'text-neutral-950 bg-lime-400 border-lime-400',
            secondary: 'border-white text-white bg-transparent',
        },
        size: {
            sm: 'h-10',
        },
    },
});

export const Button = (
    props: {
        variant: 'primary' | 'secondary';
        size?: 'sm';
    } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
    const { variant, className, size, ...rest } = props;
    return <button className={cn(classes({ variant, size, className }))} {...rest} />;
};
