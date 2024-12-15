import logoImage from '@/assets/images/logo.svg';
import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import { HamburgerMenu } from './hamburger-menu';
import { SectionWrapper } from './section-wrapper';

export const Navbar = () => {
    return (
        <SectionWrapper className="py-4 lg:py-8">
            <div className="container max-w-5xl">
                <div className="grid grid-cols-2 items-center rounded-full border border-white/15 p-2 px-4 md:pr-2 lg:grid-cols-3">
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
                        <HamburgerMenu className="md:hidden" />
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
            </div>
        </SectionWrapper>
    );
};
