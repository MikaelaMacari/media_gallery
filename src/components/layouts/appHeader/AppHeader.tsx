import { Images } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

import AddToFolder from '@/components/base/addToFolder/AddToFolder.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import {
  resetFiles,
  resetSelectedFiles,
  setSelectedFiles,
} from '@/redux/slices/filesSlice.ts';
import { FolderTypes, setFolderType } from '@/redux/slices/folderSlice.ts';
import { AppDispatch, RootState } from '@/redux/store/store.ts';
import { CheckedState } from '@radix-ui/react-checkbox';

const AppHeader = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedFiles = useSelector(
    (state: RootState) => state.filesReducer.selectedFiles,
  );
  const files = useSelector((state: RootState) => state.filesReducer.files);
  const handleGoToFolder = (): void => {
    dispatch(setFolderType(FolderTypes.AllFiles));
    dispatch(resetSelectedFiles([]));
    dispatch(resetFiles([]));
  };
  const handleSelectAllFiles = (checked: CheckedState): void => {
    if (checked) {
      dispatch(setSelectedFiles(files));
    } else {
      dispatch(resetSelectedFiles([]));
    }
  };
  return (
    <div className="bg-white h-20 w-full border-solid border-b border-bg-gray-300 flex items-center">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={
            selectedFiles.length > 0 &&
                        selectedFiles.length === files.length
          }
          onCheckedChange={(event: CheckedState) =>
            handleSelectAllFiles(event)
          }
        />
        <span className="text-gray-500">
          {selectedFiles.length} selected
        </span>
      </div>
      {!!selectedFiles.length && <AddToFolder />}
      <Button
        variant="outline"
        className="ml-auto text-gray-500 hover:text-gray-600"
        onClick={() => handleGoToFolder()}
      >
        <Images /> See All Files
      </Button>
    </div>
  );
};

export default AppHeader;
