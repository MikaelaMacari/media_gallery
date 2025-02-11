import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import { FilterTypes } from '@/redux/slices/filterSlice.ts';
import type { Draft, PayloadAction, Slice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface FileStateInterface {
  files: FileInterface[];
  initialFiles: FileInterface[];
  selectedFiles: FileInterface[];
  selectedFile: null | FileInterface;
}

const initialState: FileStateInterface = {
  files: [],
  initialFiles: [],
  selectedFiles: [],
  selectedFile: null,
};

export const fileSlice: Slice<FileStateInterface> = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFiles: (state, { payload }: PayloadAction<FileInterface[]>) => {
      state.files = payload;
      state.initialFiles = payload;
    },
    filterFiles: (
      state,
      { payload }: PayloadAction<FilterTypes | FilterTypes[]>,
    ) => {
      if (Array.isArray(payload)) {
        state.files = state.initialFiles.filter(
          (item: Draft<FileInterface>) =>
            payload.some((type) => item.url.includes(type)),
        );
      } else {
        state.files = state.initialFiles.filter(
          (item: Draft<FileInterface>) => item.url.includes(payload),
        );
      }
    },
    resetFiles: (state) => {
      state.files = state.initialFiles;
    },
    setSelectedFile: (state, { payload }: PayloadAction<FileInterface>) => {
      state.selectedFile = payload;
    },
    setSelectedFiles: (
      state,
      { payload }: PayloadAction<FileInterface | FileInterface[]>,
    ) => {
      if (Array.isArray(payload)) {
        state.selectedFiles = payload;
      } else {
        state.selectedFiles.push(payload);
      }
    },

    removeSelectedFile: (state, { payload }) => {
      const fileIndex = state.selectedFiles.findIndex(
        (selectedFile) => selectedFile.id === payload.id,
      );

      if (fileIndex !== -1) {
        state.selectedFiles.splice(fileIndex, 1);
      }
    },

    resetSelectedFiles: (state) => {
      void state.selectedFiles.splice(0, state.selectedFiles.length);
    },
  },
});

export const {
  setFiles,
  removeSelectedFile,
  setSelectedFile,
  setSelectedFiles,
  resetSelectedFiles,
  filterFiles,
  resetFiles,
} = fileSlice.actions;

export default fileSlice.reducer;
