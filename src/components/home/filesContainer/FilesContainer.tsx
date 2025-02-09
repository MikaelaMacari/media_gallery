import FileCard from '@/components/home/filesContainer/fileCard';
import { FileResponse } from '@/redux/slices/filesApiSlice.ts';

const FilesContainer = ({
  files,
  isLoading,
}: {
  files: FileResponse;
  isLoading: boolean;
}) => {
  return (
    <div className="h-svh">
      <div className="flex flex-wrap gap-4">
        {isLoading ? (
          <h1 className="text-center">Loading...</h1>
        ) : (
          files.map((item) => {
            return <FileCard key={item.id} file={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default FilesContainer;
