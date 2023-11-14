import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8"); //mengambil API dari api-libs.js
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  ); //mengambil API dari api-libs.js

  recommendedAnime = { data: recommendedAnime.slice(0, 8) };

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime}></AnimeList>
      </section>

      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnime}></AnimeList>
      </section>
    </>
  );
};

export default Page;
