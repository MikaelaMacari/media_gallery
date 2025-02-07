import SidebarFiltersGroup from '@/components/sidebar/sidebarFiltersGroup';
import SidebarFoldersGroup from '@/components/sidebar/sidebarFoldersGroup';
import SidebarHeaderContent from '@/components/sidebar/sidebarHeaderContent';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from '@/components/ui/sidebar.tsx';

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarHeaderContent />
      </SidebarHeader>
      <SidebarContent>
        <SidebarFoldersGroup />
        <SidebarFiltersGroup />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
