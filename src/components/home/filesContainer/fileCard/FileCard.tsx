import { Play } from 'lucide-react';
import { useDispatch } from 'react-redux';

import { Checkbox } from '@/components/ui/checkbox.tsx';
import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import { setSelectedFile } from '@/redux/slices/filesSlice.ts';

import FilesDialog from '../fileDialog';

const FileCard = ({ file }: FileInterface) => {
  const dispatch = useDispatch();

  const isVideo: boolean = file.url.split('.').pop() === 'mp4';

  return (
    <div
      className="group flex flex-col items-center justify-center w-48"
      onClick={() => dispatch(setSelectedFile(file))}
    >
      <div className="h-48 w-48 rounded-md hover:cursor-pointer group-hover:border-4 group-hover:border-gray-300 relative">
        <FilesDialog />
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
        <Checkbox className="absolute border-amber-50 bottom-0 left-0 size-5 hidden group-hover:block" />
      </div>
      <span className="w-full mt-4 px-2 block text-sm text-gray-500 overflow-hidden truncate text-center">
        {file.name}
      </span>
    </div>
  );
};
export default FileCard;
