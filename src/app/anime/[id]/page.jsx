import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

// Komponen Page sebagai fungsi async untuk halaman detail anime
const Page = async ({ params: { id } }) => {
  // Style untuk elemen dengan properti whiteSpace, overflowX, dan maxWidth
  const isi = {
    whiteSpace: "nowrap",
    overflowX: "auto",
    maxWidth: "100%",
  };

  // Mendapatkan respons detail anime dari API
  const anime = await getAnimeResponse(`anime/${id}`);
  // console.log(anime);

  // Render halaman detail anime
  return (
    <>
      {/* Bagian Header */}
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>

      {/* Bagian Informasi Anime */}
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="data-box">
          <div>Peringkat</div>
          <p>{anime.data.rank}</p>
        </div>

        <div className="data-box">
          <div>Skor</div>
          <p>{anime.data.score}</p>
        </div>

        <div className="data-box">
          <div>Popularitas</div>
          <p>{anime.data.popularity}</p>
        </div>

        <div className="data-box">
          <div>Episode</div>
          <p>{anime.data.episodes}</p>
        </div>

        <div className="data-box">
          <div>Studio</div>
          <div className="flex text-center" style={isi}>
            {/* Menampilkan nama studio dengan pemisah koma */}
            {anime.data.studios.map((studio, index) => (
              <span key={index} className="text-center items-center">
                {studio.name}
                {index !== anime.data.studios.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>

        <div className="data-box">
          <div>Durasi</div>
          <p className="flex" style={isi}>
            {anime.data.duration}
          </p>
        </div>

        <div className="data-box">
          <div>Status</div>
          <p className="flex" style={isi}>
            {anime.data.status}
          </p>
        </div>

        <div className="data-box">
          <div>Anggota</div>
          <p>{anime.data.members}</p>
        </div>

        <div className="data-box">
          <div>Tipe</div>
          <p>{anime.data.type}</p>
        </div>

        <div className="data-box">
          <div>Genre</div>
          <div className="flex" style={isi}>
            {/* Menampilkan genre dengan pemisah koma */}
            {anime.data.genres.map((genre, index) => (
              <span key={index} className="mr-2">
                {genre.name}
                {index !== anime.data.genres.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>

        <div className="data-box">
          <div>Source</div>
          <p>{anime.data.source}</p>
        </div>
      </div>

      {/* Bagian Gambar dan Sinopsis */}
      <div className="pt-4 px-4 flex gap-2 sm:flex-nowrap flex-wrap text-color-primary">
        {/* Menampilkan gambar dengan menggunakan Image dari Next.js */}
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        ></Image>

        {/* Menampilkan sinopsis */}
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>

      {/* Bagian Video Player */}
      <div className="">
        {/* Menampilkan Video Player dengan menggunakan VideoPlayer dari komponen Utilities */}
        <VideoPlayer youTubeId={anime.data.trailer.youtube_id}></VideoPlayer>
      </div>
    </>
  );
};

export default Page;
