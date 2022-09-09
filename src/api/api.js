import axios from "axios";

const apiKey = "28723731-5c15bd07d095f3f0e05de01ba";

const getImages = async (searchQuery = "", page = 1) => {
  try {
    const { data } = await axios.get(
      `https://pixabay.com/api?key=${apiKey}&orientation=horizontal&safesearch=true&per_page=12`,
      {
        params: {
          page,
          q: searchQuery,
        },
      }
    );
    return data.hits;
  } catch (error) {
    throw new Error(error);
  }
};

export { getImages };
