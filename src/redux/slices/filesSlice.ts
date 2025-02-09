import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import type { PayloadAction, Slice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface FileStateInterface {
  files: FileInterface[];
  selectedFiles: FileInterface[];
  selectedFile: null | FileInterface;
}

const initialState: FileStateInterface = {
  files: [],
  selectedFiles: [],
  selectedFile: null,
};

export const fileSlice: Slice<FileStateInterface> = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setFiles: (state, { payload }: PayloadAction<FileInterface[]>) => {
      state.files = payload;
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
} = fileSlice.actions;

export default fileSlice.reducer;
