import * as React from 'react';

import AppHeader from '@/components/layouts/appHeader';
import AppSidebar from '@/components/layouts/appSidebar';
import { SidebarProvider } from '@/components/ui/sidebar.tsx';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <div className="flex flex-col w-full mx-2 gap-2">
        <AppHeader />
        <main>{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
