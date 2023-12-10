import React from 'react';

const Header = ({ label }: { label: string }) => {
    return <div className="border-b border-neutral-800 p-5">{label}</div>;
};

export default Header;
