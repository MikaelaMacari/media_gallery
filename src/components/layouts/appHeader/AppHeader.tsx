import { useSelector } from 'react-redux';

import { Checkbox } from '@/components/ui/checkbox.tsx';
import { RootState } from '@/redux/store/store.ts';

const AppHeader = () => {
  const selectedItems = useSelector(
    (state: RootState) => state.store.selectedFiles,
  );
  return (
    <div className="bg-white h-20 w-full border-solid border-b border-bg-gray-300 flex items-center">
      <div className="flex items-center gap-2">
        <Checkbox />
        <span className="text-gray-500">{selectedItems} selected</span>
      </div>
    </div>
  );
};

export default AppHeader;
