import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg';
import avatar3 from '@/assets/images/avatar-florence-shaw.jpg';
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg';
import { featuresMap } from '@/constants';
import Image from 'next/image';
import { Avatar } from './avatar';
import { FeatureCard } from './feature-card';
import { FeatureTag } from './feature-tag';
import { Key } from './key';
import { SectionWrapper } from './section-wrapper';
import { Tag } from './tag';

export const Features = () => {
    return (
        <SectionWrapper>
            <div className="container">
                <Tag>Features</Tag>
                <h2 className="mx-auto mt-6 max-w-2xl text-center text-6xl font-medium">
                    Where power meets <span className="text-lime-400">simplicity</span>
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-3">
                    <FeatureCard
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-free team editing"
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="flex aspect-video items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="z-30 -ml-6 border-indigo-500">
                                <Image
                                    src={avatar2}
                                    alt="avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="z-20 -ml-6 border-amber-500">
                                <Image
                                    src={avatar3}
                                    alt="avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="z-10 -ml-6 border-transparent">
                                <div className="flex size-full items-center justify-center gap-1 rounded-full bg-neutral-700">
                                    {Array.from({ length: 3 }).map((_, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex size-1.5 rounded-full bg-white"
                                        />
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your client with prototypes that react to user actions"
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="flex aspect-video items-center justify-center">
                            <p className="text-center text-4xl font-extrabold text-white/20">
                                We&apos;ve achieved{' '}
                                <span className="to bg-pink-400 bg-gradient-to-tr from-purple-400 bg-clip-text text-transparent">
                                    incredible
                                </span>{' '}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerfull commands to help you create designs quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                    >
                        <div className="flex aspect-video items-center justify-center gap-4">
                            <Key label="shift" className="w-28" />
                            <Key label="alt" />
                            <Key label="C" />
                        </div>
                    </FeatureCard>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {featuresMap.map((feature) => (
                        <FeatureTag key={feature} label={feature} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
