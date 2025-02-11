import { ChevronDown } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

import FilterItem from '@/components/base/filterItem';
import { Checkbox } from '@/components/ui/checkbox.tsx';
import { Collapsible } from '@/components/ui/collapsible.tsx';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar.tsx';
import { filterFiles, resetFiles } from '@/redux/slices/filesSlice.ts';
import {
  FilterInterface,
  FilterTypes,
  setFilterType,
} from '@/redux/slices/filterSlice.ts';
import { AppDispatch, RootState } from '@/redux/store/store.ts';
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible';

import GroupLabel from '../../base/groupLabel';

const SidebarFiltersGroup = () => {
  const dispatch: AppDispatch = useDispatch();

  const filters: FilterInterface[] = useSelector(
    (state: RootState) => state.filterReducer.filters,
  );
  const selectedFilterTypes: FilterTypes[] = useSelector(
    (state: RootState) => state.filterReducer.selectedFilterTypes,
  );

  const allFiltersSelected = selectedFilterTypes.length === filters.length;

  const handleSelectAllFilters = (checked: boolean) => {
    const types = checked ? filters.map(({ type }) => type) : [];
    dispatch(setFilterType(types));
    dispatch(checked ? filterFiles(types) : resetFiles([]));
  };

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>
          <GroupLabel label="Filters" />
        </SidebarGroupLabel>
      </SidebarGroup>
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
          <div className="flex justify-between items-center">
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                <span>Media type</span>
                <ChevronDown className="ml-2 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <span className="mr-1.5">
              <Checkbox
                checked={allFiltersSelected}
                onCheckedChange={handleSelectAllFilters}
              />
            </span>
          </div>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {filters.map((filter, index) => (
                  <FilterItem filter={filter} key={index} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </>
  );
};

export default SidebarFiltersGroup;
