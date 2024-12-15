'use client';
import { logos } from '@/constants';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';
import { SectionWrapper } from '../custom/section-wrapper';

export const LogoTicker = () => {
    return (
        <SectionWrapper className="overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-xl text-white/50">
                    Already chosen by these market leaders
                </h3>
                <div className="mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{ x: '-50%' }}
                        transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
                        className="flex gap-24 flex-none pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, idx) => (
                            <React.Fragment key={idx}>
                                {logos.map((logo) => (
                                    <Image key={logo.name} src={logo.image} alt={logo.name} />
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};
