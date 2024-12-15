'use client';
import cursorImg from '@/assets/images/cursor-you.svg';
import designExample1Image from '@/assets/images/design-example-1.png';
import designExample2Image from '@/assets/images/design-example-2.png';
import { motion, useAnimate } from 'motion/react';
import Image from 'next/image';
import { useEffect } from 'react';
import { Button } from '../custom/button';
import { Pointer } from '../custom/pointer';
import { SectionWrapper } from '../custom/section-wrapper';

export const Hero = () => {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: 'easeInOut' },
            ],
        ]);

        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5, ease: 'easeInOut' },
            ],
        ]);
    }, []);

    return (
        <SectionWrapper
            className="overflow-x-clip"
            style={{ cursor: `url(${cursorImg.src}), auto` }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    className="absolute -left-32 top-16 hidden lg:block"
                    drag
                >
                    <Image
                        src={designExample1Image}
                        alt="Design Example 1 image"
                        draggable={false}
                    />
                </motion.div>

                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Anna" />
                </motion.div>

                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    className="absolute -right-64 -top-16 hidden lg:block"
                    drag
                >
                    <Image
                        src={designExample2Image}
                        alt="Design Example 2 image"
                        draggable={false}
                    />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute -top-4 right-80 hidden lg:block"
                >
                    <Pointer name="Remus" color="red" />
                </motion.div>

                <div className="flex justify-center">
                    <div className="inline-flex rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="mt-6 text-center text-6xl font-medium md:text-7xl lg:text-8xl">
                    Impactful design, created effortlessly
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
                    Design tools shouldn&apos;t slow you down. Layers combines powerful features
                    with an intuitive inteface that keeps you in your creative flow.
                </p>
                <form className="mx-auto mt-8 flex max-w-lg rounded-full border border-white/15 p-2">
                    <input
                        type="email"
                        placeholder="enter your email"
                        className="w-full bg-transparent px-4 md:flex-1"
                    />
                    <Button variant="primary" size="sm" type="submit" className="whitespace-nowrap">
                        Sign Up
                    </Button>
                </form>
            </div>
        </SectionWrapper>
    );
};
