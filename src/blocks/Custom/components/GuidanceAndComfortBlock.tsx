import React from 'react'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import floralBG from '/public/img/floral-3.png'
import Image from 'next/image'

interface GuidanceAndComfortBlockProps {
    badgeText?: string
    guideTitle?: any
    guideDescription?: string
    guideButtonText?: string
    guideButtonLink?: string
    backgroundImage?: {
        url: string
        alt?: string
    }
}

const GuidanceAndComfortBlock = ({
    badgeText,
    guideTitle,
    guideDescription,
    guideButtonText = 'Download the Guidebook',
}: GuidanceAndComfortBlockProps) => {
    return (
        <section
            className={cn(
                'relative overflow-hidden rounded-lg bg-background-light p-9 xl:h-[548px] flex flex-col justify-between gap-10 md:gap-20 border border-secondary'
            )}
        >
            {/* Text Content */}
            <div className="relative flex-1 z-10">
                <div>
                    {badgeText && (
                        <span className="inline-block px-3 py-1 rounded-full border border-gray-300 text-gray-700 text-xs font-medium bg-white/70">
                            {badgeText}
                        </span>
                    )}

                    {guideTitle && (
                        <RichText
                            data={guideTitle}
                            className="font-faustina text-3xl md:text-[36px] font-semibold text-[#1d2420]"
                        />
                    )}
                </div>
            </div>

            <div className='flex justify-between flex-wrap items-end  gap-8 z-10'>
                {guideDescription && (
                    <p className="text-[#333333] leading-relaxed text-base md:text-lg max-w-lg">
                        {guideDescription}
                    </p>
                )}

                <Button
                    variant="default"
                >
                    {guideButtonText}
                </Button>
            </div>

            <Image
                src={floralBG}
                alt="Floral Background"
                width={760}
                height={548}
                className="absolute bottom-0 right-0 z-0"
            />
        </section>
    )
}

export default GuidanceAndComfortBlock
