import { useSelector } from 'react-redux';

import FileCard from '@/components/base/fileCard';
import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import { RootState } from '@/redux/store/store.ts';

const FilesContainer = () => {
  const files: FileInterface[] = useSelector(
    (state: RootState) => state.filesReducer.files,
  );
  return (
    <div className="h-svh">
      <div className="flex flex-wrap gap-4">
        {files.map((item) => {
          return <FileCard key={item.id} file={item} />;
        })}
      </div>
    </div>
  );
};

export default FilesContainer;
