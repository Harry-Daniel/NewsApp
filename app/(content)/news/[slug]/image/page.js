
import { getNewsItem } from "@/components/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  const newsItemsSlug = params.slug;
  const newsItem = await getNewsItem(newsItemsSlug)

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
