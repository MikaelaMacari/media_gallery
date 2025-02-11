import { ForwardRefExoticComponent, RefAttributes, useState } from 'react';
import { ChevronDown, Image, ImagePlay, LucideProps, Play } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '@/components/ui/checkbox.tsx';
import { Collapsible } from '@/components/ui/collapsible.tsx';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar.tsx';
import { FileInterface } from '@/redux/slices/filesApiSlice.ts';
import { filterFiles, resetFiles } from '@/redux/slices/filesSlice.ts';
import { FilterTypes } from '@/redux/slices/filterSlice.ts';
import { AppDispatch, RootState } from '@/redux/store/store.ts';
import { CheckedState } from '@radix-ui/react-checkbox';
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible';

import GroupLabel from '../groupLabel';

interface FilterInterface {
  title: string;
  type: FilterTypes;
  icon: ForwardRefExoticComponent<
        Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
}

const filters: FilterInterface[] = [
  {
    title: 'Image',
    type: FilterTypes.Image,
    icon: Image,
  },
  {
    title: 'Videos',
    type: FilterTypes.Video,
    icon: Play,
  },
  {
    title: 'GIFs',
    type: FilterTypes.Gif,
    icon: ImagePlay,
  },
];

const SidebarFiltersGroup = () => {
  const dispatch: AppDispatch = useDispatch();
  const files: FileInterface[] = useSelector(
    (state: RootState) => state.filesReducer.files,
  );
  const [selectedFilterTypes, setSelectedFilterTypes] = useState<
    FilterTypes[]
  >([]);
  const getFilteredFilesLength = (type: FilterTypes) => {
    return files.filter((item) => item.url.includes(type)).length;
  };
  const handleChange = (type: FilterTypes, event: CheckedState): void => {
    let updatedTypes = [...selectedFilterTypes];

    if (event) {
      updatedTypes.push(type);
    } else {
      updatedTypes = updatedTypes.filter((item) => item !== type);
    }

    setSelectedFilterTypes(updatedTypes);

    const allSelected = filters.every((item) =>
      updatedTypes.includes(item.type),
    );

    if (allSelected) {
      dispatch(filterFiles(updatedTypes));
    } else {
      dispatch(filterFiles(updatedTypes));
    }
  };

  const handleSelectAllFilters = (value: CheckedState) => {
    if (value) {
      const allFilterTypes = filters.map((item) => item.type);
      setSelectedFilterTypes(allFilterTypes);
      dispatch(filterFiles(allFilterTypes));
    } else {
      setSelectedFilterTypes([]);
      dispatch(resetFiles());
    }
  };
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>
          <GroupLabel label={'Filters'} />
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
                checked={
                  selectedFilterTypes.length ===
                                    filters.length
                }
                onCheckedChange={(event: CheckedState) =>
                  handleSelectAllFilters(event)
                }
              />
            </span>
          </div>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {filters.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <div className="flex items-center">
                      <SidebarMenuButton
                        asChild
                        className="cursor-pointer"
                      >
                        <div className="flex">
                          <item.icon />
                          <span className="text-slate-800 font-medium">
                            {item.title}
                          </span>
                          <span className="text-slate-400 font-medium">
                            {getFilteredFilesLength(
                              item.type,
                            )}
                          </span>
                        </div>
                      </SidebarMenuButton>
                    </div>
                    <SidebarMenuAction
                      asChild
                      className="hover:bg-transparent"
                    >
                      <span>
                        <Checkbox
                          checked={selectedFilterTypes.includes(
                            item.type,
                          )}
                          onCheckedChange={(
                            event: CheckedState,
                          ) =>
                            handleChange(
                              item.type,
                              event,
                            )
                          }
                        />
                      </span>
                    </SidebarMenuAction>
                  </SidebarMenuItem>
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
