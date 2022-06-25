import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../models/Product'
import db from '../../../utils/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await db.connect();
    const data = await Product.findById(req.query.id);
    await db.disconnect();
    res.send(data);
};