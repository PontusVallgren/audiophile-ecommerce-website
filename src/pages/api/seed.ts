import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../models/Product';
import data from '../../utils/data';
import db from '../../utils/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await db.connect();
    await Product.deleteMany();
    await Product.insertMany(data.products)
    await db.disconnect();
    res.send({message: 'seeded successfully'});
};