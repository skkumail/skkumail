import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch("http://backend:8000/");
    const data = await response.json();
    res.status(200).json({ message: data.message });
    //res.status(200).json({ message: data.Hello });
}

