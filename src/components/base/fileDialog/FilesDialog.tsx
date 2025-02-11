import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';

import ImageThumbnail from '@/components/base/imageThumbnail';
import VideoThumbnail from '@/components/base/videoThumbnail';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';
import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import { RootState } from '@/redux/store/store.ts';

const FilesDialog = () => {
  const selectedItem: FileInterface | null = useSelector(
    (state: RootState) => state.filesReducer.selectedFile,
  );
  const isVideo = selectedItem
    ? selectedItem.url.split('.').pop() === 'mp4'
    : false;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="absolute hidden top-1 -left-1 group-hover:flex rotate-45 z-10 hover:cursor-pointer">
          <ChevronLeft size="15" color="white" />
          <ChevronRight size="15" color="white" />
        </span>
      </DialogTrigger>
      <DialogTitle className="hidden" />
      <DialogContent className="min-w-fit sm:w-[300px] flex items-center">
        {selectedItem ? (
          <div className="p-2 w-full">
            {isVideo ? (
              <VideoThumbnail
                url={selectedItem.url}
                controls={true}
                hasPlayIcon={false}
              />
            ) : (
              <ImageThumbnail
                url={selectedItem.url}
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
