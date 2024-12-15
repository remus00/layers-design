import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
    const { className, children, ...rest } = props;

    return (
        <div
            className={cn(
                'mx-auto flex w-full max-w-fit items-center gap-2 rounded-full border border-lime-400 px-3 py-1 uppercase text-lime-400',
                className
            )}
            {...rest}
        >
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
};
