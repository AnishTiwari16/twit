import React from 'react';
import Sidebar from './Sidebar';
import SideBarLogoutBtn from './SideBarLogoutBtn';
import FollowTabs from './FollowTabs';

type LayoutProps = {
    children: React.ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="mx-auto h-screen container max-w-6xl">
            <div className="grid grid-cols-4 h-full">
                <Sidebar />
                <div className="col-span-3 lg:col-span-2 border-x border-neutral-800">
                    {children}
                </div>
                <FollowTabs />
            </div>
        </div>
    );
};

export default Layout;
