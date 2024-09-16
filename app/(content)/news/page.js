import { getAllNews } from "@/components/lib/news";
import NewsList from "@/components/news-list";

export default async function NewsPage() {
  const news = await getAllNews();
  return (
    <section>
      <h1>News Page</h1>
      <NewsList news={news} />;
    </section>
  );
}
