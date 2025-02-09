import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';

export interface Folder {
  id: number;
  title: string;
  items: FileInterface[];
  type: FolderTypes;
}

export enum FolderTypes {
  AllFiles = 'ALL_FILES',
  YourFolder = 'YOUR_FOLDER',
  NewFolder = 'NEW_FOLDER',
}

export interface FolderStateInterface {
  folders: Folder[];
  folderType: FolderTypes;
}

const initialState: FolderStateInterface = {
  folders: [
    {
      id: 0,
      title: 'Your Folder',
      items: [],
      type: FolderTypes.YourFolder,
    },
    {
      id: 1,
      title: 'New Folder',
      items: [],
      type: FolderTypes.NewFolder,
    },
  ],
  folderType: FolderTypes.AllFiles,
};

export const folderSlice: Slice<FolderStateInterface> = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setFolderType: (
      state,
      { payload: folderType }: PayloadAction<FolderTypes>,
    ) => {
      state.folderType = folderType;
    },
    addFileToFolder: (
      state,
      action: PayloadAction<{ folderId: string; files: FileInterface[] }>,
    ) => {
      const folderIndex = state.folders.findIndex(
        (folder) => folder.title === action.payload.folderId,
      );
      if (folderIndex !== -1) {
        state.folders[folderIndex].items.push(...action.payload.files);
      }
    },

    deleteFileFromFolder: (
      state,
      action: PayloadAction<{ folderId: number; fileName: string }>,
    ) => {
      const folderIndex = state.folders.findIndex(
        (folder) => folder.id === action.payload.folderId,
      );

      if (folderIndex !== -1) {
        const fileIndex = state.folders[folderIndex].items.findIndex(
          (item) => item.name === action.payload.fileName,
        );

        if (fileIndex !== -1) {
          state.folders[folderIndex].items.splice(fileIndex, 1);
        }
      }
    },

    renameFile: (
      state,
      action: PayloadAction<{
        folderId: number;
        oldFileName: string;
        newFileName: string;
      }>,
    ) => {
      const folderIndex = state.folders.findIndex(
        (folder) => folder.id === action.payload.folderId,
      );

      if (folderIndex !== -1) {
        const fileIndex = state.folders[folderIndex].items.findIndex(
          (item) => item.name === action.payload.oldFileName,
        );

        if (fileIndex !== -1) {
          state.folders[folderIndex].items[fileIndex].name =
                        action.payload.newFileName;
        }
      }
    },
  },
});

export const {
  addFileToFolder,
  deleteFileFromFolder,
  renameFile,
  setFolderType,
} = folderSlice.actions;

export default folderSlice.reducer;
