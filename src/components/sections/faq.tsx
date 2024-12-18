'use client';
import { faqs } from '@/constants';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { PlusIcon } from '../custom/plus-icon';
import { SectionWrapper } from '../custom/section-wrapper';
import { Tag } from '../custom/tag';

export const Faq = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const handleClick = (idx: number) => {
        if (idx !== selectedIndex) {
            setSelectedIndex(idx);
        } else {
            setSelectedIndex(null);
        }
    };

    return (
        <SectionWrapper>
            <div className="container">
                <Tag>Faqs</Tag>

                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got <span className="text-lime-400">answers</span>
                </h2>

                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIdx) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 cursor-pointer rounded-2xl border border-white/10 p-6"
                            onClick={() => handleClick(faqIdx)}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium">{faq.question}</h3>
                                <PlusIcon className={cn(selectedIndex === faqIdx && 'rotate-45')} />
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIdx && (
                                    <motion.div
                                        initial={{ height: 0, marginTop: 0 }}
                                        animate={{ height: 'auto', marginTop: 24 }}
                                        exit={{ height: 0, marginTop: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-white/50">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
