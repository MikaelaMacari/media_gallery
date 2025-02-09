import { FolderOpen } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

import GroupLabel from '@/components/sidebar/groupLabel/GroupLabel.tsx';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar.tsx';
import { Folder, setFolderType } from '@/redux/slices/folderSlice.ts';
import { AppDispatch, RootState } from '@/redux/store/store.ts';

const SidebarFoldersGroup = () => {
  const folders: Folder[] = useSelector(
    (state: RootState) => state.foldersReducer.folders,
  );
  const dispatch: AppDispatch = useDispatch();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <GroupLabel label={'Folders'} />
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {folders.map((folder, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                className="cursor-pointer"
                asChild
                onClick={() =>
                  dispatch(setFolderType(folder.type))
                }
              >
                <div className="flex">
                  <FolderOpen />
                  <span className="text-slate-800 font-medium">
                    {folder.title}
                  </span>
                  <span className="text-slate-400 font-medium">
                    {folder.items.length}
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
