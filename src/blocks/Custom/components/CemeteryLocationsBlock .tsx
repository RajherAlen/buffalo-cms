import Image from 'next/image'
import { cn } from '@/utilities/ui'
import PhoneIcon from '@/components/ui/icons/PhoneIcon'
import ClockIcon from '@/components/ui/icons/ClockIcon'
import LocationIcon from '@/components/ui/icons/LocationIcon'
import { getCemeteries } from '@/utilities/getCemeteries'
import Link from 'next/link'

interface CemeteryItem {
    id?: string | number
    name: string
    detailsLink: string
    address?: string
    phone?: string | null
    workingHours?: {
        weekday?: string | null
        weekend?: string | null
    }
    image?: {
        url: string
        alt?: string | null
    }
}

interface CemeteryLocationsProps {
    layout?: 'list' | 'preview'
}

const CemeteryLocationsBlock = async ({
    layout = 'list',
}: CemeteryLocationsProps) => {
    const cemeteries: CemeteryItem[] = await getCemeteries()

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div
                    className={cn(
                        'grid gap-6',
                        layout === 'list' && 'md:grid-cols-2 lg:grid-cols-2'
                    )}
                >
                    {cemeteries.map((cemetery) => (
                        <div
                            key={cemetery.id}
                            className="flex rounded-lg p-5 bg-background-light border border-primary-dark"
                        >
                            {/* IMAGE */}
                            {cemetery.image?.url && (
                                <div className="relative w-40 h-full shrink-0 mr-4">
                                    <Image
                                        src={cemetery.image.url}
                                        alt={cemetery.image.alt || cemetery.name}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                </div>
                            )}

                            {/* CONTENT */}
                            <div className="flex flex-col justify-between gap-4 flex-1">
                                <h3 className="text-xl font-faustina">{cemetery.name}</h3>

                                {cemetery.address && (
                                    <div className="flex gap-2">
                                        <LocationIcon className="min-w-4" />
                                        <p className="text-sm">{cemetery.address}</p>
                                    </div>
                                )}

                                {(cemetery.workingHours?.weekday || cemetery.workingHours?.weekend) && (
                                    <div className="flex gap-2">
                                        <ClockIcon className="min-w-4" />

                                        {cemetery.workingHours?.weekday && (
                                            <div className="text-sm text-brand-30 flex-1">
                                                <p>Mon–Fri:</p>
                                                <p>{cemetery.workingHours.weekday}</p>
                                            </div>
                                        )}

                                        {cemetery.workingHours?.weekend && (
                                            <div className="text-sm text-brand-30 flex-1">
                                                <p>Sat–Sun:</p>
                                                <p>{cemetery.workingHours.weekend}</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className='flex justify-between items-center'>
                                    {cemetery.phone && (
                                        <div className='flex gap-2'>
                                            <PhoneIcon className="min-w-4" />
                                            <p className="text-sm font-bold">{cemetery.phone}</p>
                                        </div>
                                    )}

                                    <div className='flex-1 flex justify-end'>
                                        <Link href={cemetery.detailsLink} className="px-0 text-bold text-[#E89A1E]">
                                            Details →
                                        </Link>
                                    </div>
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
