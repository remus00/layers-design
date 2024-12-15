'use client';
import logoImage from '@/assets/images/logo.svg';
import { navLinks } from '@/constants';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../custom/button';
import { HamburgerMenu } from '../custom/hamburger-menu';
import { SectionWrapper } from '../custom/section-wrapper';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <SectionWrapper className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full backdrop-blur bg-neutral-950/70">
                        <div className="grid grid-cols-2 items-center rounded-full p-2 px-4 md:pr-2 lg:grid-cols-3">
                            <div className="">
                                <Image
                                    src={logoImage}
                                    alt="Layers logo"
                                    className="h-9 w-auto md:h-auto"
                                />
                            </div>
                            <div className="hidden items-center justify-center lg:flex">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <Link key={link.href} href={link.href}>
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <HamburgerMenu
                                    className="md:hidden"
                                    isOpen={isOpen}
                                    handleOpenClick={handleOpenClick}
                                />
                                <Button
                                    variant="secondary"
                                    className="hidden items-center justify-center md:inline-flex"
                                >
                                    Log In
                                </Button>
                                <Button
                                    variant="primary"
                                    className="hidden items-center justify-center md:inline-flex"
                                >
                                    Sign up
                                </Button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col py-4 items-center gap-4">
                                        {navLinks.map((link, idx) => (
                                            <Link key={idx} href={link.href}>
                                                {link.label}
                                            </Link>
                                        ))}

                                        <Button variant="secondary">Log In</Button>
                                        <Button variant="primary">Sign up</Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </SectionWrapper>

            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]" />
        </>
    );
};
