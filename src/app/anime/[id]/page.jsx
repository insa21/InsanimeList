import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import ColloctionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";

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
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  // console.log(anime);

  // Render halaman detail anime
  return (
    <>
      {/* Bagian Header */}
      <div className="pt-4 px-2">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && (
          <ColloctionButton
            anime_mal_id={id}
            user_email={user?.email}
          ></ColloctionButton>
        )}
      </div>

      {/* Bagian Informasi Anime */}
      <div className="pt-4 px-2 flex gap-2 text-color-primary overflow-x-auto">
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
          <div>Lisensi</div>
          <div className="flex text-center" style={isi}>
            {/* Menampilkan nama studio dengan pemisah koma */}
            {anime.data.licensors.map((lisensor, index) => (
              <span key={index} className="text-center items-center">
                {lisensor.name}
                {index !== anime.data.licensors.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
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

      <div className="grid md:grid-cols-2 gap-2 grid-cols-1 mx-2 py-4">
        {/* Kolom Pertama: Gambar */}
        <div className="flex flex-col justify-center items-center">
          {/* Menggunakan Image dari Next.js */}
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={350}
            height={350}
            className="w-full rounded object-cover max-h-96"
          />
        </div>

        {/* Kolom Kedua: Video YouTube */}
        <div className="">
          {/* Menampilkan Video Player dengan menggunakan VideoPlayer dari komponen Utilities */}
          <VideoPlayer
            youTubeId={anime.data.trailer.youtube_id}
            width="100%"
            height="384"
            className="w-full rounded object-cover max-h-96"
          />
        </div>
      </div>
      <div className="flex flex-col py-4 gap-2 ">
        <h3 className="text-xl text-color-primary pl-2">
          {anime.data.title_english} | {anime.data.rating}
        </h3>
        <p className=" text-color-primary pl-2">{anime.data.synopsis}</p>
        <a href={anime.data.url} className="text-color-pindah underline pl-2">
          official website
        </a>
      </div>
    </>
  );
};

export default Page;
