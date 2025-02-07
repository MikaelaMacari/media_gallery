import NoImage from '@/assets/images/no-file-selected.png';

const EmptyContent = () => (
  <div className="flex justify-center items-center h-svh rounded-xl bg-gray-100 border-dashed border-2 border-bg-gray-300">
    <div className="flex flex-col items-center gap-4">
      <img src={NoImage as string} alt="No Image Selected" />
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-3xl font-semibold text-slate-800">
          This folder is empty
        </h2>
        <p className="text-base text-gray-600">
          Add images, videos and GIFs.
        </p>
      </div>
    </div>
  </div>
);

export default EmptyContent;
