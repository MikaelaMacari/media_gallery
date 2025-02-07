import { Checkbox } from '@/components/ui/checkbox.tsx';

import FilesDialog from '../fileDialog';

const FileCard = ({ url, name, index }) => {
  return (
    <div className="group flex flex-col items-center justify-center w-48">
      <div className="h-48 w-48 rounded-md hover:cursor-pointer group-hover:border-4 group-hover:border-gray-300 relative">
        <FilesDialog url={url} index={index} />
        <img
          className="rounded-md group-hover:rounded h-full w-full object-cover object-center"
          src={url}
          alt={name}
        />
        <Checkbox className="absolute border-amber-50 bottom-0 left-0 size-5 hidden group-hover:block" />
      </div>
      <span className="w-full mt-4 px-2 block text-sm text-gray-500 overflow-hidden truncate text-center">
        {name}
      </span>
    </div>
  );
};
export default FileCard;
