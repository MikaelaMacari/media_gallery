import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import type { PayloadAction, Slice } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Folder {
  id: number;
  name: number;
}

export interface FileStateInterface {
  files: FileInterface[];
  folders: Folder[];
  totalFiles: number;
  selectedFiles: FileInterface[];
  selectedFile: null | FileInterface;
}

const initialState: FileStateInterface = {
  files: [],
  folders: [],
  totalFiles: 0,
  selectedFiles: [],
  selectedFile: null,
};

export const fileSlice: Slice<FileStateInterface> = createSlice({
  name: 'files',
  initialState,
  reducers: {
    setSelectedFile: (state, { payload }: PayloadAction<FileInterface>) => {
      state.selectedFile = payload;
    },
    setSelectedFiles: (state, { payload }: PayloadAction<FileInterface>) =>
      void state.selectedFiles.push(payload),
    removeSelectedFile: (state, { payload }) =>
      void state.selectedFiles.splice(
        state.selectedFiles.findIndex(
          (index) => index === payload.index,
        ),
        1,
      ),
    resetSelectedFiles: (state) => {
      void state.selectedFiles.splice(0, state.selectedFiles.length);
    },
  },
});

export const {
  removeSelectedFile,
  setSelectedFile,
  setSelectedFiles,
  resetSelectedFiles,
} = fileSlice.actions;

export default fileSlice.reducer;
