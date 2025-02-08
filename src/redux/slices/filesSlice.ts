import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface Folder {
  id: number;
  name: number;
}

export interface FileStateInterface {
  files: FileInterface[];
  folders: Folder[];
  totalFiles: number;
  selectedFiles: number;
  selectedFile: null | FileInterface;
}

const initialState: FileStateInterface = {
  files: [],
  folders: [],
  totalFiles: 0,
  selectedFiles: 0,
  selectedFile: null,
};

export const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    addFile: (state) => {
      state.files.push(state);
    },
    setSelectedFile: (state, action: PayloadAction<FileInterface>) => {
      state.selectedFile = action.payload;
    },
  },
});

export const { increment, decrement, setSelectedFile } = fileSlice.actions;

export default fileSlice.reducer;
