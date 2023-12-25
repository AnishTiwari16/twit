import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prismadb';
const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req);
    if (req.method !== 'POST') {
        return res.status(405).end();
    }
    try {
        const { email, name, password, username } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                email,
                name,
                username,
                hashedPassword,
            },
        });
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(400).end();
    }
};
export default Handler;
