import { Play } from 'lucide-react';

const VideoThumbnail = ({
  url,
  controls = false,
  hasPlayIcon = true,
}: {
  url: string;
  controls: boolean;
  hasPlayIcon: boolean;
}) => (
  <>
    <video
      className="rounded-md group-hover:rounded h-full w-full object-cover object-center z-0"
      src={url}
      controls={controls}
      autoPlay
    />
    {hasPlayIcon && (
      <div className="absolute top-[40%] left-[40%] size-10 rounded-full bg-neutral-800 opacity-50 flex items-center justify-center">
        <Play color="white" />
      </div>
    )}
  </>
);

export default VideoThumbnail;
