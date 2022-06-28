import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../../models/Product'
import db from '../../../../utils/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        await db.connect();
        const data = await Product.findById(req.query.id, {reviews: 1});
        await db.disconnect();
        res.send(data);
    }

};