import { FolderOpen } from 'lucide-react';

import GroupLabel from '@/components/sidebar/groupLabel/GroupLabel.tsx';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar.tsx';

const folders = [
  {
    title: 'Your Folder',
    count: 30,
    icon: FolderOpen,
  },
  {
    title: 'New Folder',
    count: 0,
    icon: FolderOpen,
  },
];

const SidebarFoldersGroup = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <GroupLabel label={'Folders'} />
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {folders.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild>
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
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarFoldersGroup;
