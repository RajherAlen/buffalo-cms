export async function getNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?limit=3&sort=-date`)
  const data = await res.json()

  return data.docs || []
}
