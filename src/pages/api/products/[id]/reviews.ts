import type { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../../models/Product'
import db from '../../../../utils/db'
import { paginate } from '../../../../utils/filters';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id;
    if (req.method === "GET") {
        await db.connect();
        const data = await Product.findById(id, {reviews: 1});
        await db.disconnect();
        res.status(200).send(paginate(data, req.query.page as string));
    } else if (req.method === "POST") {
        await db.connect();
        await Product.findByIdAndUpdate(id, {
            $push: {
                reviews: {
                    name: req.body.name,
                    rating: req.body.rating,
                    comment: req.body.comment,
                }
            }
        });
        db.disconnect();
        res.status(201).send(req.body);
    }


};