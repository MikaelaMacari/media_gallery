import { ChevronLeft, ChevronRight } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel.tsx';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog.tsx';

const FilesDialog = ({ url, index }) => (
  <Dialog>
    <DialogTrigger asChild>
      <span className="absolute hidden top-1 -left-1 group-hover:flex rotate-45">
        <ChevronLeft size="15" color="white" />
        <ChevronRight size="15" color="white" />
      </span>
    </DialogTrigger>
    <DialogContent className="min-w-fit sm:w-[300px] flex">
      <Carousel>
        <CarouselContent className="sm:w-[300px] md:w-[600px] lg:w-[800px]">
          <CarouselItem>
            <div className="p-2 w-full h-auto">
              <img
                className="rounded-md group-hover:rounded h-full w-full object-cover object-center"
                src={url}
                alt="image"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-6" />
        <CarouselNext className="mr-6" />
      </Carousel>
    </DialogContent>
  </Dialog>
);

export default FilesDialog;
