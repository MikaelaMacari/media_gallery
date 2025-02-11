import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EmptyContent from '@/components/home/emptyContent';
import FilesContainer from '@/components/home/filesContainer';
import {
  FileResponse,
  useGetFilesQuery,
} from '@/redux/slices/filesApiSlice.ts';
import { setFiles } from '@/redux/slices/filesSlice.ts';
import { Folder, FolderTypes } from '@/redux/slices/folderSlice.ts';
import { AppDispatch, RootState } from '@/redux/store/store.ts';

const Home = (): React.JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const {
    data: ALL_FILES,
    isLoading,
  }: { data: FileResponse; isLoading: boolean } = useGetFilesQuery();
  const YOUR_FOLDER: Folder[] = useSelector(
    (state: RootState) => state.foldersReducer.folders[0].items,
  );
  const NEW_FOLDER: Folder[] = useSelector(
    (state: RootState) => state.foldersReducer.folders[1].items,
  );
  const folderType: Folder[] = useSelector(
    (state: RootState) => state.foldersReducer.folderType,
  );
  const files = {
    [FolderTypes.AllFiles]: ALL_FILES,
    [FolderTypes.YourFolder]: YOUR_FOLDER,
    [FolderTypes.NewFolder]: NEW_FOLDER,
  };
  
  useEffect(() => {
    dispatch(setFiles(!isLoading ? files[folderType] : []));
  }, [folderType, isLoading]);

  return !isLoading && files[folderType].length ? (
    <FilesContainer />
  ) : (
    <EmptyContent />
  );
};

export default Home;
