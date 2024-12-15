'use client';
import { cn } from '@/lib/utils';
import { IntegrationsType } from '@/types/integrations';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Fragment } from 'react';

export const IntegrationColumn = (props: {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}) => {
    const { integrations, className, reverse } = props;

    return (
        <motion.div
            initial={{ y: reverse ? '-50%' : 0 }}
            animate={{ y: reverse ? 0 : '-50%' }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className={cn('flex flex-col gap-4 pb-4', className)}
        >
            {Array.from({ length: 2 }).map((_, idx) => (
                <Fragment key={idx}>
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
                </Fragment>
            ))}
        </motion.div>
    );
};
