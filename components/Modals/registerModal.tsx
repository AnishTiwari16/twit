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
import useRegisterModal from '@/hooks/useRegisterModal';
import axios from 'axios';
import React, { useCallback } from 'react';

export function RegisterModal() {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [name, setName] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const toggleState = useCallback(() => {
        if (isLoading) {
            return;
        }
        loginModal.onOpen();
        registerModal.onClose();
    }, [isLoading, loginModal, registerModal]);
    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            await axios.post('/api/register', {
                email,
                password,
                username,
                name,
            });
            loginModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [registerModal, email, password, username, name]);

    return (
        <Dialog open={true}>
            <DialogContent className="sm:max-w-[425px] bg-black">
                <DialogHeader>
                    <DialogTitle>Create an account</DialogTitle>
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
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            type="text"
                            id="name"
                            placeholder="john"
                            className="col-span-3 bg-black"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Username
                        </Label>
                        <Input
                            type="username"
                            id="text"
                            placeholder="john101"
                            className="col-span-3 bg-black"
                            onChange={(e) => setUsername(e.target.value)}
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
                    <Button
                        type="submit"
                        className="w-full bg-white text-black hover:bg-white hover:bg-opacity-75 hover:transition"
                        onClick={onSubmit}
                    >
                        Register
                    </Button>
                </DialogFooter>
                <div className="text-center text-[#b3b3b4] text-[12px] font-normal pt-2">
                    Already have an account?{' '}
                    <span
                        className="text-white font-semibold underline cursor-pointer"
                        onClick={toggleState}
                    >
                        Sign in
                    </span>
                </div>
            </DialogContent>
        </Dialog>
    );
}
