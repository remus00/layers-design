import { cn } from '@/lib/utils';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const SectionWrapper = ({ children, className }: Props) => {
    return <div className={cn('py-24', className)}>{children}</div>;
};
