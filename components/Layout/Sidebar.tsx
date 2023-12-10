import React from 'react';
import SidebarItems from './SidebarItems';
import AaditIcon from './AaditIcon';
import SideBarLogoutBtn from './SideBarLogoutBtn';
import SideBarActionBtn from './SideBarActionBtn';

const Sidebar = () => {
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: '',
        },
        {
            label: 'Notifications',
            href: '/Notifications',
            icon: '',
        },
        {
            label: 'Profile',
            href: '/user/123',
            icon: '',
        },
    ];
    return (
        <div>
            <AaditIcon />
            {items.map((elem) => (
                <SidebarItems
                    key={elem.label}
                    label={elem.label}
                    href={elem.href}
                    icon={elem.icon}
                />
            ))}
            <SideBarLogoutBtn />
            <SideBarActionBtn />
        </div>
    );
};

export default Sidebar;
