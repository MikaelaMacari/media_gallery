import FileCard from '@/components/home/filesContainer/fileCard';
import {
  FileResponse,
  useGetFilesQuery,
} from '@/redux/slices/filesApiSlice.ts';

const FilesContainer = () => {
  const { data, isLoading }: { data: FileResponse; isLoading: boolean } =
        useGetFilesQuery();
  return (
    <div className="h-svh">
      <div className="flex flex-wrap gap-4">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((item) => {
            return <FileCard key={item.id} file={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default FilesContainer;
