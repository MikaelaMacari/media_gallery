import { Images } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

import AddToFolder from '@/components/layouts/appHeader/addToFolder/AddToFolder.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import {
  resetSelectedFiles,
  setSelectedFiles,
} from '@/redux/slices/filesSlice.ts';
import { FolderTypes, setFolderType } from '@/redux/slices/folderSlice.ts';
import { AppDispatch, RootState } from '@/redux/store/store.ts';
import { CheckedState } from '@radix-ui/react-checkbox';

const AppHeader = () => {
  const selectedFiles = useSelector(
    (state: RootState) => state.filesReducer.selectedFiles,
  );
  const files = useSelector((state: RootState) => state.filesReducer.files);

  const dispatch: AppDispatch = useDispatch();
  const handleGoToFolder = (): void => {
    dispatch(setFolderType(FolderTypes.AllFiles));
    dispatch(resetSelectedFiles());
  };
  const handleSelectAllFiles = (value: CheckedState) => {
    if (value) {
      dispatch(setSelectedFiles(files));
    } else {
      dispatch(resetSelectedFiles());
    }
  };
  return (
    <div className="bg-white h-20 w-full border-solid border-b border-bg-gray-300 flex items-center">
      <div className="flex items-center gap-2">
        <Checkbox
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
