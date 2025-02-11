import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '@/components/ui/checkbox.tsx';
import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar.tsx';
import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import { filterFiles, resetFiles } from '@/redux/slices/filesSlice.ts';
import {
  FilterInterface,
  FilterTypes,
  setFilterType,
} from '@/redux/slices/filterSlice.ts';
import { AppDispatch, RootState } from '@/redux/store/store.ts';
import { CheckedState } from '@radix-ui/react-checkbox';

const FilterItem = ({ filter }: { filter: FilterInterface }) => {
  const dispatch: AppDispatch = useDispatch();

  const filters: FilterInterface[] = useSelector(
    (state: RootState) => state.filterReducer.filters,
  );
  const selectedFilterTypes: FilterTypes[] = useSelector(
    (state: RootState) => state.filterReducer.selectedFilterTypes,
  );
  const files: FileInterface[] = useSelector(
    (state: RootState) => state.filesReducer.files,
  );

  const filterCounts = useMemo(
    () =>
      filters.reduce(
        (acc, { type }) => ({
          ...acc,
          [type]: files.filter(({ url }) => url.includes(type))
            .length,
        }),
        {} as Record<FilterTypes, number>,
      ),
    [files, filters],
  );

  const handleFilterChange = (type: FilterTypes, checked: boolean) => {
    const updatedTypes = checked
      ? [...selectedFilterTypes, type]
      : selectedFilterTypes.filter((t) => t !== type);

    dispatch(setFilterType(updatedTypes));
    if (updatedTypes.length === 0) {
      dispatch(resetFiles([]));
    } else {
      dispatch(filterFiles(updatedTypes));
    }
  };

  return (
    <SidebarMenuItem>
      <div className="flex items-center">
        <SidebarMenuButton asChild className="cursor-pointer">
          <div className="flex">
            <filter.icon />
            <span className="text-slate-800 font-medium">
              {filter.title}
            </span>
            <span className="text-slate-400 font-medium">
              {filterCounts[filter.type]}
            </span>
          </div>
        </SidebarMenuButton>
      </div>
      <SidebarMenuAction asChild className="hover:bg-transparent">
        <span>
          <Checkbox
            checked={selectedFilterTypes.includes(filter.type)}
            onCheckedChange={(event: CheckedState) =>
              handleFilterChange(filter.type, Boolean(event))
            }
          />
        </span>
      </SidebarMenuAction>
    </SidebarMenuItem>
  );
};

export default FilterItem;
