'use client';
import { introductionText } from '@/constants';
import { cn } from '@/lib/utils';
import { useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { SectionWrapper } from '../custom/section-wrapper';
import { Tag } from '../custom/tag';

const words = introductionText.split(' ');

export const Introduction = () => {
    const [current, setCurrent] = useState(0);

    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ['start end', 'end end'],
    });

    const wordIdx = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIdx.on('change', (latest) => {
            setCurrent(latest);
        });
    }, [wordIdx]);

    /* log the scrollY progress */
    // useMotionValueEvent(scrollYProgress, 'change', (latest) => console.log(latest));

    return (
        <SectionWrapper className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <Tag>Introducing Layers</Tag>
                    <div className="mt-10 text-center text-4xl font-medium md:text-6xl lg:text-7xl">
                        <span className="">Your create process deserves better.</span>{' '}
                        <span className="text-white/15">
                            {words.map((word, idx) => (
                                <span
                                    key={idx}
                                    className={cn(
                                        'transition duration-500 text-white/15',
                                        idx < current && 'text-white',
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="block text-lime-400">
                            That&apos;s why we built Layers.
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget} />
            </div>
        </SectionWrapper>
    );
};
