export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource); // Pastikan menggunakan async/await untuk mendapatkan respons dari API
  return response.data.flatMap((item) => item.entry); // Gunakan flatMap untuk menggabungkan hasil dari setiap objek
};
