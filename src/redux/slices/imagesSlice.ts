import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Image {
  id: number;
  name: string;
  url: string;
}

type ImagesResponse = Image[];

export const imagesApi = createApi({
  reducerPath: 'images',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Images'],
  endpoints: (build) => ({
    getImages: build.query<ImagesResponse, void>({
      query: () => 'images',
    }),
  }),
});

export const { useGetImagesQuery } = imagesApi;

export const { endpoints, reducerPath, reducer, middleware } = imagesApi;
