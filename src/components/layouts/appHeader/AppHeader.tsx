import { Checkbox } from '@/components/ui/checkbox.tsx';

const AppHeader = () => {
  return (
    <div className="bg-white h-20 w-full border-solid border-b border-bg-gray-300 flex items-center">
      <div className="flex items-center gap-2">
        <Checkbox />
        <span className="text-gray-500">0 selected</span>
      </div>
    </div>
  );
};

export default AppHeader;
