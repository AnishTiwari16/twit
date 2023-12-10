import React from 'react';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

const SideBarActionBtn = () => {
    return (
        <div className="pr-10 pt-3">
            <div
                className={cn(
                    'w-full cursor-pointer',
                    buttonVariants({ variant: 'outline' })
                )}
            >
                <span className="text-black">Post</span>
            </div>
        </div>
    );
};

export default SideBarActionBtn;
