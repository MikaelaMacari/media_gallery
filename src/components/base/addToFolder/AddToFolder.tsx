import { useDispatch, useSelector } from 'react-redux';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import { resetSelectedFiles } from '@/redux/slices/filesSlice.ts';
import { addFileToFolder, Folder } from '@/redux/slices/folderSlice.ts';
import { AppDispatch, RootState } from '@/redux/store/store.ts';

const AddToFolder = () => {
  const folders: Folder[] = useSelector(
    (state: RootState) => state.foldersReducer.folders,
  );
  const selectedFiles: FileInterface[] = useSelector(
    (state: RootState) => state.filesReducer.selectedFiles,
  );
  const dispatch: AppDispatch = useDispatch();
  const handleChange = (value: string): void => {
    dispatch(addFileToFolder({ folderId: value, files: selectedFiles }));
    dispatch(resetSelectedFiles([]));
  };

  return (
    <Select onValueChange={(value: string) => handleChange(value)}>
      <SelectTrigger className="w-[150px] ml-6">
        <SelectValue placeholder="Add to Folder" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {folders.map((folder) => {
            return (
              <SelectItem value={folder.title} key={folder.id}>
                {folder.title}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default AddToFolder;
