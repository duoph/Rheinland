import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';


export const getDataFromToken: any = async (req: NextRequest) => {
    try {

        const token = req.cookies?.get('token')?.value;

        if (!token) {
            throw new Error('Authorization token not found in cookies');

        }

        const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET!);

        console.log(decodedToken)

        return decodedToken;

    } catch (error) {
        console.error('Error decoding JWT token:', error);

        return { error: 'Invalid or expired token' };
    }
};