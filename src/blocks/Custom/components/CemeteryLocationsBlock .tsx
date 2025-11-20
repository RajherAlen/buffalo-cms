import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import PhoneIcon from '@/components/ui/icons/PhoneIcon'
import ClockIcon from '@/components/ui/icons/ClockIcon'
import LocationIcon from '@/components/ui/icons/LocationIcon'

interface CemeteryItem {
    id?: string | number
    cemeteryTitle: string
    cemeteryAddress?: string
    cemeteryPhone?: string
    hoursWeekdays?: string
    hoursSaturday?: string
    detailsLink?: string
    image?: {
        url: string
        alt?: string
    }
}

interface CemeteryLocationsProps {
    layout?: 'list' | 'preview'
    cemeteries?: CemeteryItem[]
}

const CemeteryLocationsBlock = ({
    layout = 'list',
    cemeteries = [],
}: CemeteryLocationsProps) => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div
                    className={cn(
                        'grid gap-6',
                        layout === 'list' && 'md:grid-cols-2 lg:grid-cols-2'
                    )}
                >
                    {cemeteries.map((cemetery, i) => (
                        <div
                            key={i}
                            className="flex rounded-lg p-5 bg-background-light border border-primary-dark"
                        >
                            {/* IMAGE */}
                            {cemetery.image?.url && (
                                <div className="relative w-40 h-full shrink-0 mr-4">
                                    <Image
                                        src={cemetery.image.url}
                                        alt={cemetery.image.alt || cemetery.cemeteryTitle}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            )}

                            <div className="flex flex-col justify-between gap-4 flex-1">
                                <h3 className="text-xl font-faustina">{cemetery.cemeteryTitle}</h3>

                                <div className='flex gap-2'>
                                    <LocationIcon className="min-w-4" />
                                    <p className="text-sm">{cemetery.cemeteryAddress}</p>
                                </div>

                                <div className='flex gap-2'>
                                    <ClockIcon className="min-w-4" />

                                    {cemetery.hoursWeekdays && (
                                        <div className="text-sm text-brand-30 flex-1">
                                            <p>Mon–Fri:</p>
                                            <p>
                                                {cemetery.hoursWeekdays}
                                            </p>
                                        </div>
                                    )}

                                    {cemetery.hoursSaturday && (
                                        <div className="text-sm text-brand-30 flex-1">
                                            <p>Sat:</p>
                                            <p>
                                                {cemetery.hoursSaturday}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className='flex justify-between items-center'>
                                    {cemetery.cemeteryPhone && (
                                        <div className='flex gap-2'>
                                            <PhoneIcon className="min-w-4" />
                                            <p className="text-sm font-bold">{cemetery.cemeteryPhone}</p>
                                        </div>
                                    )}
                                    {cemetery.detailsLink && (
                                        <div className='flex-1 flex justify-end'>
                                            <Link href={cemetery.detailsLink} className="px-0 text-bold text-[#E89A1E]">
                                                Details →
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CemeteryLocationsBlock
