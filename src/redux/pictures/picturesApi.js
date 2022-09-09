import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "28723731-5c15bd07d095f3f0e05de01ba";

export const picturesApi = createApi({
  reducerPath: "picturesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pixabay.com/api`,
  }),
  tagTypes: ["pictures"],
  endpoints: (build) => ({
    fetchImages: build.query({
      query: (q = "", page = 1) =>
        `?q=${q}&page=${page}&key=${apiKey}&orientation=horizontal&safesearch=true&per_page=12`,
      providesTags: ["pictures"],
    }),
  }),
});

export const { useFetchImagesQuery } = picturesApi;
