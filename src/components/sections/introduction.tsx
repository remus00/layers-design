import { introductionText } from '@/constants';
import { SectionWrapper } from '../custom/section-wrapper';
import { Tag } from '../custom/tag';

export const Introduction = () => {
    return (
        <SectionWrapper className="py-28 lg:py-40">
            <div className="container">
                <Tag>Introducing Layers</Tag>
                <div className="mt-10 text-center text-4xl font-medium md:text-6xl lg:text-7xl">
                    <span className="">Your create process deserves better.</span>{' '}
                    <span className="text-white/15">{introductionText}</span>
                    <span className="block text-lime-400">That&apos;s why we built Layers.</span>
                </div>
            </div>
        </SectionWrapper>
    );
};
