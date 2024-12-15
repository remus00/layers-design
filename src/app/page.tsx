import { CallToAction } from '@/components/sections/call-to-action';
import { Faq } from '@/components/sections/faq';
import { Features } from '@/components/sections/features';
import { Hero } from '@/components/sections/hero';
import { Integrations } from '@/components/sections/integrations';
import { Introduction } from '@/components/sections/introduction';
import { LogoTicker } from '@/components/sections/logo-ticker';
import { Navbar } from '@/components/sections/navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
            <Faq />
            <CallToAction />
        </>
    );
}
