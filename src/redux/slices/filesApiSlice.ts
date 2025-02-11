import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface FileInterface {
  id: number;
  name: string;
  url: string;
}

export type FileResponse = FileInterface[];

export const filesApiSlice = createApi({
  reducerPath: 'files',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Images'],
  endpoints: (build) => ({
    getFiles: build.query<FileResponse, void>({
      query: () => 'files',
    }),
  }),
});

export const { useGetFilesQuery } = filesApiSlice;
