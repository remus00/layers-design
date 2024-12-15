import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export const FeatureTag = (props: { label: string } & HTMLAttributes<HTMLDivElement>) => {
    const { className, label, ...rest } = props;

    return (
        <div
            className={cn(
                'inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 px-3 py-1.5 md:px-5 md:py-2',
                className
            )}
            {...rest}
        >
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-lime-400 text-xl text-neutral-950">
                &#10038;
            </span>
            <span className="font-medium md:text-lg">{label}</span>
        </div>
    );
};
