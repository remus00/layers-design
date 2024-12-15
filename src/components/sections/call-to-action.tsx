'use client';
import { AnimationPlaybackControls, motion, useAnimate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { SectionWrapper } from '../custom/section-wrapper';

export const CallToAction = () => {
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const animationRef = useRef<AnimationPlaybackControls>(null);

    useEffect(() => {
        animationRef.current = animate(
            scope.current,
            { x: '-50%' },
            { duration: 30, ease: 'linear', repeat: Infinity },
        );
    }, []);

    useEffect(() => {
        if (animationRef.current) {
            if (isHovered) {
                animationRef.current.speed = 0.5;
            } else {
                animationRef.current.speed = 1;
            }
        }
    }, [isHovered]);

    return (
        <SectionWrapper>
            <div className="overflow-x-clip p-4 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 cursor-pointer text-7xl md:text-8xl font-medium group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, idx) => (
                        <div key={idx} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">&#10038;</span>
                            <span className="group-hover:text-lime-400 transition-colors duration-300">
                                Try it for free
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
};
