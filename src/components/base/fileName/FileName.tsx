const FileName = ({
  name,
  isSelected,
}: {
  name: string;
  isSelected: boolean;
}) => {
  const baseClass =
        'w-full mt-4 px-2 block text-sm overflow-hidden truncate text-center';
  const textColorClass = isSelected ? 'text-blue-500' : 'text-gray-500';

  return <span className={`${baseClass} ${textColorClass}`}>{name}</span>;
};

export default FileName;
