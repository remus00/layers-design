import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import { Integrations } from '@/components/integrations';
import { Introduction } from '@/components/introduction';
import { LogoTicker } from '@/components/logo-ticker';
import { Navbar } from '@/components/navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Introduction />
            <Features />
            <Integrations />
        </>
    );
}
