import { ChevronDown, Image, ImagePlay, Play } from 'lucide-react';

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
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible';

import GroupLabel from '../groupLabel';

const filters = [
  {
    title: 'Image',
    count: 0,
    icon: Image,
  },
  {
    title: 'Videos',
    count: 0,
    icon: Play,
  },
  {
    title: 'GIFs',
    count: 0,
    icon: ImagePlay,
  },
];

const SidebarFiltersGroup = () => {
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
              <Checkbox />
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
                            {item.count}
                          </span>
                        </div>
                      </SidebarMenuButton>
                    </div>
                    <SidebarMenuAction
                      asChild
                      className="hover:bg-transparent"
                    >
                      <span>
                        <Checkbox />
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
