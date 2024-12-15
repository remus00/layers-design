import avatar1 from '@/assets/images/avatar-ashwin-santiago.jpg';
import avatar3 from '@/assets/images/avatar-florence-shaw.jpg';
import avatar2 from '@/assets/images/avatar-lula-meyers.jpg';
import avatar4 from '@/assets/images/avatar-owen-garcia.jpg';
import { featuresMap } from '@/constants';
import Image from 'next/image';
import { Avatar } from '../custom/avatar';
import { FeatureCard } from '../custom/feature-card';
import { FeatureTag } from '../custom/feature-tag';
import { Key } from '../custom/key';
import { SectionWrapper } from '../custom/section-wrapper';
import { Tag } from '../custom/tag';

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
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="flex aspect-video items-center justify-center">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="avatar 1" className="rounded-full" />
                            </Avatar>
                            <Avatar className="z-30 -ml-6 border-indigo-500">
                                <Image src={avatar2} alt="avatar 2" className="rounded-full" />
                            </Avatar>
                            <Avatar className="z-20 -ml-6 border-amber-500">
                                <Image src={avatar3} alt="avatar 3" className="rounded-full" />
                            </Avatar>
                            <Avatar className="z-10 duration-500 -ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="flex size-full items-center justify-center gap-1 relative rounded-full bg-neutral-700">
                                    <Image
                                        src={avatar4}
                                        alt="avatar 4"
                                        className="rounded-full absolute size-full opacity-0 duration-500 group-hover:opacity-100 transition"
                                    />
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
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="flex aspect-video items-center justify-center">
                            <p className="text-center text-4xl font-extrabold text-white/20 group-hover:text-white/10 duration-500 transition">
                                We&apos;ve achieved{' '}
                                <span className="to bg-pink-400 relative bg-gradient-to-tr from-purple-400 bg-clip-text text-transparent">
                                    <span>incredible</span>
                                    <video
                                        src="/assets/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"
                                    />
                                </span>{' '}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerfull commands to help you create designs quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
                    >
                        <div className="flex aspect-video items-center justify-center gap-4">
                            <Key
                                label="shift"
                                className="w-28 outline-transparent outline-offset-4 outline group-hover:outline-lime-400 outline-2 transition-all duration-500 group-hover:translate-y-1"
                            />
                            <Key
                                label="alt"
                                className="outline-transparent outline-offset-4 outline group-hover:outline-lime-400 outline-2 transition-all duration-500 delay-150 group-hover:translate-y-1"
                            />
                            <Key
                                label="C"
                                className="outline-transparent outline-offset-4 outline group-hover:outline-lime-400 outline-2 transition-all duration-500 delay-300 group-hover:translate-y-1"
                            />
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
