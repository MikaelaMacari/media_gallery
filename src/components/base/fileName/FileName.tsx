import EditFileName from '@/components/base/editFileName';

const FileName = ({
  name,
  isSelected,
  id,
}: {
  id: number;
  name: string;
  isSelected: boolean;
}) => {
  const baseClass = 'text-sm overflow-hidden truncate';
  const textColorClass = isSelected ? 'text-blue-500' : 'text-gray-500';

  return (
    <div className="group px-2 mt-4 flex items-center gap-2 w-full">
      <span className={`${baseClass} ${textColorClass}`}>{name}</span>
      <EditFileName id={id} name={name} />
    </div>
  );
};

export default FileName;
