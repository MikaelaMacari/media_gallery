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
  tagTypes: ['Files'],
  endpoints: (builder) => ({
    getFiles: builder.query<FileResponse, void>({
      query: () => 'files',
      providesTags: ['Files'],
    }),
    updateFile: builder.mutation({
      query: ({ id, name }) => ({
        url: `files/${id}`,
        method: 'PATCH',
        body: { name },
      }),
      invalidatesTags: ['Files'],
    }),

    deleteFile: builder.mutation({
      query: (id) => ({
        url: `files/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Files'],
    }),
  }),
});

export const {
  useGetFilesQuery,
  useUpdateFileMutation,
  useDeleteFileMutation,
} = filesApiSlice;
