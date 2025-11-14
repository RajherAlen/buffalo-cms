'use client';

import React from 'react';
import RichText from '@/components/RichText';
import { Accordion } from '@/components/ui/accordion';
import Image from 'next/image';
import Link from 'next/link';

type FAQ = {
    faqQuestion: string;
    faqAnswer: string;
};

type FAQBlockProps = {
    faqRichTitle?: any;
    faqs: FAQ[];
};

export const FAQBlock: React.FC<FAQBlockProps> = ({ faqRichTitle, faqs }) => {
    // Convert your FAQ data to Accordion-compatible items
    const items = faqs.map((faq) => ({
        title: (
            <span className="text-lg font-medium text-gray-900">{faq.faqQuestion}</span>
        ),
        content: (
            <div className="mt-3 text-gray-700">
                <p>{faq.faqAnswer}</p>
            </div>
        ),
    }));

    return (
        <section className="max-w-[1320px] mx-auto py-16">
            <div className="flex flex-col lg:flex-row justify-between gap-10 bg-background-light rounded-lg border border-primary-dark px-9 py-7 relative overflow-hidden">
                <div className='flex flex-col justify-between gap-10 z-[1]'>
                    {faqRichTitle && (
                        <RichText
                            data={faqRichTitle}
                            className="text-left !text-4xl font-faustina"
                        />
                    )}

                    <div className='text-base'>
                        <p>Have more questions?</p>
                        <Link href="/faq" className='font-bold'>Visit our full FAQ section →</Link>
                    </div>
                </div>

                <div className="flex flex-col lg:max-w-[727px] w-full">
                    <Accordion items={items} singleOpen variant="outline" wrapperClassName="flex flex-col gap-3 z-[1]" />
                </div>
                <Image
                    src="/img/wreath.png"
                    width={360}
                    height={200}
                    alt="Wreath"
                    className="absolute bottom-0 left-0"
                />
            </div>

        </section>
    );
};

export default FAQBlock;
