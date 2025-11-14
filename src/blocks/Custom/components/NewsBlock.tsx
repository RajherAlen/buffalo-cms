import { getNews } from '@/utilities/getNews'
import Image from 'next/image'
import Link from 'next/link'

export default async function NewsBlock() {
  const news = await getNews()
  return (
    <section className="bg-cream py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif italic">News & Announcements</h2>
          <Link href="/news" className="border px-4 py-2 rounded">
            Read All News
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news?.map((item: any) => (
            <Link
              href={`/news/${item.slug}`}
              key={item.id}
              className="block border border-primary-dark bg-white rounded-lg overflow-hidden"
            >
              {item.image && (
                <Image
                  src={item.image.url}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <p className="text-sm text-gray-500">{item.location}</p>
                <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-2">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
