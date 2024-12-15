import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export const Key = (props: { label: string } & HTMLAttributes<HTMLDivElement>) => {
    const { className, label, ...rest } = props;
    return (
        <div
            className={cn(
                'inline-flex size-14 items-center justify-center rounded-2xl bg-neutral-300 text-xl font-medium text-neutral-950',
                className
            )}
            {...rest}
        >
            {label}
        </div>
    );
};
