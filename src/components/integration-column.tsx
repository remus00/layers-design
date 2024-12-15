import { cn } from '@/lib/utils';
import { IntegrationsType } from '@/types/integrations';
import Image from 'next/image';

export const IntegrationColumn = (props: {
    integrations: IntegrationsType;
    className?: string;
}) => {
    const { integrations, className } = props;

    return (
        <div className={cn('flex flex-col gap-4 pb-4', className)}>
            {integrations.map((item) => (
                <div
                    key={item.name}
                    className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                >
                    <div className="flex items-center justify-center">
                        <Image src={item.icon} alt={item.name} className="size-24" />
                    </div>
                    <h3 className="text-3xl text-center mt-6">{item.name}</h3>
                    <p className="text-center text-white/50 mt-2">{item.description}</p>
                </div>
            ))}
        </div>
    );
};
