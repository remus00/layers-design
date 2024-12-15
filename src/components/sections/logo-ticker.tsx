import { logos } from '@/constants';
import Image from 'next/image';
import { SectionWrapper } from '../custom/section-wrapper';

export const LogoTicker = () => {
    return (
        <SectionWrapper className="overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-xl text-white/50">
                    Already chosen by these market leaders
                </h3>
                <div className="mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex gap-24 pr-24">
                        {logos.map((logo) => (
                            <Image key={logo.name} src={logo.image} alt={logo.name} />
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
