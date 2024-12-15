import designExample1Image from '@/assets/images/design-example-1.png';
import designExample2Image from '@/assets/images/design-example-2.png';
import Image from 'next/image';
import { Button } from '../custom/button';
import { Pointer } from '../custom/pointer';
import { SectionWrapper } from '../custom/section-wrapper';

export const Hero = () => {
    return (
        <SectionWrapper className="overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1Image} alt="Design Example 1 image" />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2Image} alt="Design Example 2 image" />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute -top-4 right-80 hidden lg:block">
                    <Pointer name="Remus" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
                        ✨ $7.5 seed round raised
                    </div>
                </div>
                <h1 className="mt-6 text-center text-6xl font-medium md:text-7xl lg:text-8xl">
                    Impactful design, created effortlessly
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
                    Design tools shouldn&apos;t slow you down. Layers combines powerful features
                    with an intuitive inteface that keeps you in your creative flow.
                </p>
                <form className="mx-auto mt-8 flex max-w-lg rounded-full border border-white/15 p-2">
                    <input
                        type="email"
                        placeholder="enter your email"
                        className="w-full bg-transparent px-4 md:flex-1"
                    />
                    <Button variant="primary" size="sm" type="submit" className="whitespace-nowrap">
                        Sign Up
                    </Button>
                </form>
            </div>
        </SectionWrapper>
    );
};
