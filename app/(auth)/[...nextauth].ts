import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/prismadb';
import bcrypt from 'bcrypt';
export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials'); //user have not entered email or password
                }
                const user = await prisma.user.findUnique({
                    //finding user in db
                    where: { email: credentials.email },
                });
                if (!user || !user?.hashedPassword) {
                    //if there is no user or user hashed password is incorrect
                    throw new Error('Invalid credentials');
                }
                const isCorrectedPassword = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword //comparing entered password and user password stored in db
                );
                if (!isCorrectedPassword) {
                    throw new Error('Invalid credentials');
                }
                return user;
            },
        }),
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
});
