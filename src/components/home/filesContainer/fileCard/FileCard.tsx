import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '@/components/ui/checkbox.tsx';
import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import {
  removeSelectedFile,
  setSelectedFile,
  setSelectedFiles,
} from '@/redux/slices/filesSlice.ts';
import { AppDispatch, RootState } from '@/redux/store/store.ts';
import { CheckedState } from '@radix-ui/react-checkbox';

import FilesDialog from '../fileDialog';

const FileCard = ({ file }: FileInterface) => {
  const dispatch: AppDispatch = useDispatch();
  const selectedItems: FileInterface[] = useSelector(
    (state: RootState) => state.filesReducer.selectedFiles,
  );
  const isVideo: boolean = file.url.split('.').pop() === 'mp4';
  const [isSelected, setIsSelected] = useState<CheckedState>(false);

  useEffect(() => {
    const isSelected = selectedItems.some((item) => item.id === file.id);
    setIsSelected(isSelected);
  }, [file.id, selectedItems]);

  const handleChange = (value: CheckedState): void => {
    setIsSelected(value);
    if (value) {
      dispatch(setSelectedFiles(file));
    } else {
      dispatch(removeSelectedFile(file));
    }
  };

  return (
    <div
      className="group flex flex-col items-center justify-center w-48 "
      onClick={() => dispatch(setSelectedFile(file))}
    >
      <div
        className={`relative h-[180px] w-[200px] rounded-md p-2 ${isSelected ? 'border-2 border-blue-500' : 'border-gray-300'}`}
      >
        <div
          className={`absolute top-0 left-0 h-[175px] w-[195px] rounded-md group-hover:border-4 group-hover:border-gray-300   ${isSelected && 'border-4 border-gray-300'}`}
        >
          <FilesDialog fileId={file.id} />
          {!isVideo ? (
            <img
              className="rounded-md group-hover:rounded h-full w-full object-cover object-center"
              src={file.url}
              alt={file.name}
            />
          ) : (
            <>
              <video
                className="rounded-md group-hover:rounded h-full w-full object-cover object-center z-0 "
                src={file.url}
                alt={file.name}
              />
              <div className="absolute top-[40%] left-[40%] size-10 rounded-full bg-neutral-800 opacity-50 flex items-center justify-center">
                <Play color="white" />
              </div>
            </>
          )}
          <Checkbox
            className={`absolute border-amber-50 bottom-0 left-0 size-5 hidden group-hover:block ${isSelected ? 'block' : 'hidden'}`}
            checked={isSelected}
            onCheckedChange={(event: CheckedState) =>
              handleChange(event)
            }
          />
        </div>
      </div>
      <span
        className={`w-full mt-4 px-2 block text-sm overflow-hidden truncate text-center ${isSelected ? 'text-blue-500' : 'text-gray-500'}`}
      >
        {file.name}
      </span>
    </div>
  );
};
export default FileCard;
