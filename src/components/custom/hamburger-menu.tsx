import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    isOpen: boolean;
    handleOpenClick: () => void;
}

export const HamburgerMenu = ({ className, isOpen, handleOpenClick }: Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn('feather feather-menu', className)}
            onClick={handleOpenClick}
        >
            <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={cn('origin-left transition', isOpen && 'rotate-45 -translate-y-1')}
            ></line>
            <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={cn('transition', isOpen && 'opacity-0')}
            ></line>
            <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={cn('origin-left transition', isOpen && '-rotate-45 translate-y-1')}
            ></line>
        </svg>
    );
};
