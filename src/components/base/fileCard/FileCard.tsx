import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilesDialog from '@/components/base/fileDialog';
import FileName from '@/components/base/fileName';
import ImageThumbnail from '@/components/base/imageThumbnail';
import VideoThumbnail from '@/components/base/videoThumbnail';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import {
  removeSelectedFile,
  setSelectedFile,
  setSelectedFiles,
} from '@/redux/slices/filesSlice.ts';
import { AppDispatch, RootState } from '@/redux/store/store.ts';
import { CheckedState } from '@radix-ui/react-checkbox';

const FileCard = ({ file }: { file: FileInterface }) => {
  const dispatch: AppDispatch = useDispatch();
  const selectedItems: FileInterface[] = useSelector(
    (state: RootState) => state.filesReducer.selectedFiles,
  );
  const [isSelected, setIsSelected] = useState<CheckedState>(false);

  const isVideo: boolean = file.url.split('.').pop() === 'mp4';

  useEffect(() => {
    setIsSelected(selectedItems.some((item) => item.id === file.id));
  }, [file.id, selectedItems]);

  const handleCheckboxChange = (checked: CheckedState): void => {
    setIsSelected(checked);

    if (checked) {
      dispatch(setSelectedFiles(file));
    } else {
      dispatch(removeSelectedFile(file));
    }
  };
  const handleCardClick = () => {
    dispatch(setSelectedFile(file));
  };

  return (
    <div
      className="group flex flex-col items-center justify-center w-48 "
      onClick={() => handleCardClick()}
    >
      <div
        className={`relative h-[180px] w-[200px] rounded-md p-2 ${isSelected ? 'border-2 border-blue-500' : 'border-gray-300'}`}
      >
        <div
          className={`absolute top-0 left-0 h-[175px] w-[195px] rounded-md group-hover:border-4 group-hover:border-gray-300   ${isSelected && 'border-4 border-gray-300'}`}
        >
          <FilesDialog />
          {!isVideo ? (
            <ImageThumbnail url={file.url} alt={file.name} />
          ) : (
            <VideoThumbnail
              url={file.url}
              controls={false}
              hasPlayIcon={true}
            />
          )}
          <Checkbox
            className={`absolute border-amber-50 bottom-0 left-0 size-5 hidden group-hover:block ${isSelected ? 'block' : 'hidden'}`}
            checked={isSelected}
            onCheckedChange={(event: CheckedState) =>
              handleCheckboxChange(event)
            }
          />
        </div>
      </div>
      <FileName name={file.name} isSelected={Boolean(isSelected)} />
    </div>
  );
};

export default FileCard;
