import { integrations } from '@/constants';
import { IntegrationColumn } from './integration-column';
import { SectionWrapper } from './section-wrapper';
import { Tag } from './tag';

export const Integrations = () => {
    return (
        <SectionWrapper className="overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag className="mx-0">Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Playes well with&nbsp;
                            <span className="text-lime-400">others</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Layers seamlessy connects with your favourite tool, making it easy to
                            plug into any workflow and collaborate across platforms.
                        </p>
                    </div>

                    <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid md:grid-cols-2 gap-4">
                        <IntegrationColumn integrations={integrations} />
                        <IntegrationColumn
                            integrations={integrations.slice().reverse()}
                            className="hidden md:flex"
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
