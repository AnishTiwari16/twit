import React from 'react';
type sideBarItemsProps = {
    label: string;
    href: string;
    icon: string;
    key: string;
};
const SidebarItems: React.FC<sideBarItemsProps> = ({
    label,
    href,
    icon,
    key,
}) => {
    return (
        <div key={key} className="py-3">
            {label}
        </div>
    );
};

export default SidebarItems;
