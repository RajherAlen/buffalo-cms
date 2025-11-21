import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function getCemeteries() {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'cemeteries',
    limit: 3,
    sort: '-date',
    pagination: false,
    depth: 1,
  })

  const docs = result.docs || []

  // Normalize shape so consumers can rely on consistent fields
  return docs.map((c: any) => {
    const imageObj =
      c.image && typeof c.image === 'object' && c.image.url
        ? { url: c.image.url, alt: c.image.alt ?? null }
        : undefined

    return {
      id: c.id,
      name: c.name,
      detailsLink: c.slug ? `/cemeteries/${c.slug}` : c.detailsLink || '#',
      address: c.address ?? undefined,
      phone: c.phone ?? undefined,
      workingHours: c.workingHours
        ? {
            weekday: c.workingHours.weekday ?? undefined,
            weekend: c.workingHours.weekend ?? undefined,
          }
        : undefined,
      image: imageObj,
    }
  })
}
