'use client';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal copy';
import React, { useCallback } from 'react';

export function LoginDialog() {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            loginModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [loginModal]);
    const toggleState = useCallback(() => {
        if (isLoading) {
            return;
        }
        registerModal.onOpen();
        loginModal.onClose();
    }, [isLoading, registerModal, loginModal]);
    return (
        <Dialog open={loginModal.isOpen}>
            <DialogContent className="sm:max-w-[425px] bg-black">
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Email
                        </Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="anish123@gmail.com"
                            className="col-span-3 bg-black"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Password
                        </Label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter password"
                            className="col-span-3 bg-black"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
                <div className="text-center text-[#b3b3b4] text-[12px] font-normal pt-2">
                    First time using aadit?{' '}
                    <span
                        className="text-white font-semibold underline cursor-pointer"
                        onClick={toggleState}
                    >
                        Create an account
                    </span>
                </div>
            </DialogContent>
        </Dialog>
    );
}
