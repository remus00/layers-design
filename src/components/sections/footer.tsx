import logoImg from '@/assets/images/logo.svg';
import { footerLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '../custom/section-wrapper';

export const Footer = () => {
    return (
        <SectionWrapper className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div className="">
                        <Image src={logoImg} alt="Layers logo" />
                    </div>
                    <nav className="flex gap-6">
                        {footerLinks.map((link, idx) => (
                            <Link key={idx} href={link.href} className="text-white/50 text-sm">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </SectionWrapper>
    );
};
