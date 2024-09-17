import { getNewsItem } from "@/components/lib/news";
import ModalBackdrop from "@/components/modal-backdrop";

import { notFound } from "next/navigation";

export default async function InterceptedImagePage({ params }) {
  const newsItemsSlug = params.slug;
  const newsItem = await getNewsItem(newsItemsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
