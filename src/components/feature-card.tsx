import { cn } from '@/lib/utils';

interface Props {
    title: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}

export const FeatureCard = ({ title, description, children, className }: Props) => {
    return (
        <div
            className={cn(
                'rounded-3xl border border-white/10 bg-neutral-900 p-6',
                className
            )}
        >
            <div className="aspect-video">{children}</div>
            <div>
                <h3 className="mt-6 text-3xl font-medium">{title}</h3>
                <p className="mt-2 text-white/50">{description}</p>
            </div>
        </div>
    );
};
