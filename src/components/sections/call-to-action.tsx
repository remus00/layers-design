import { SectionWrapper } from '../custom/section-wrapper';

export const CallToAction = () => {
    return (
        <SectionWrapper>
            <div className="overflow-x-clip p-4 flex">
                <div className="flex flex-none gap-16 text-7xl md:text-8xl font-medium">
                    {Array.from({ length: 10 }).map((_, idx) => (
                        <div key={idx} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">&#10038;</span>
                            <span>Try it for free</span>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
