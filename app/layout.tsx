import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Layout from '@/components/Layout';
import { LoginDialog } from '@/components/Modals/loginModal';
import { RegisterModal } from '@/components/Modals/registerModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Aadit',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'h-full w-full bg-black text-white antialiased',
                    inter.className
                )}
            >
                <RegisterModal />
                <Layout>{children}</Layout>

                <LoginDialog />
            </body>
        </html>
    );
}
