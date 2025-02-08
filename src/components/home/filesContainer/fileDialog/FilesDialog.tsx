import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import { RootState } from '@/redux/store/store.ts';

const FilesDialog = () => {
  const selectedItem: FileInterface = useSelector(
    (state: RootState) => state.store.selectedFile,
  );
  const isVideo = selectedItem
    ? selectedItem.url.split('.').pop() === 'mp4'
    : false;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="absolute hidden top-1 -left-1 group-hover:flex rotate-45 z-10">
          <ChevronLeft size="15" color="white" />
          <ChevronRight size="15" color="white" />
        </span>
      </DialogTrigger>
      <DialogTitle className="hidden" />
      <DialogContent className="min-w-fit sm:w-[300px] flex items-center">
        {selectedItem ? (
          <div className="p-2 w-full">
            {isVideo ? (
              <video
                className="rounded-md group-hover:rounded h-full w-full object-cover object-center"
                src={selectedItem.url}
                alt={selectedItem.name}
                controls={true}
                autoPlay={true}
              />
            ) : (
              <img
                className="rounded-md group-hover:rounded h-full w-full object-cover object-center"
                src={selectedItem.url}
                alt={selectedItem.name}
              />
            )}
          </div>
        ) : (
          <h1>No file selected</h1>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FilesDialog;
