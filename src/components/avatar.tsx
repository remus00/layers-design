import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export const Avatar = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...rest } = props;
    return (
        <div
            className={cn(
                'size-20 overflow-hidden rounded-full border-4 border-blue-500 bg-neutral-900 p-1',
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
};
