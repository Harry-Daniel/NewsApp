import { getAllNews } from "@/components/lib/news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  const news = getAllNews();
  return (
    <section>
      <h1>News Page</h1>
      <NewsList news={news} />;
    </section>
  );
}
