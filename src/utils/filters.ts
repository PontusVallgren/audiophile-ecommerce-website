import { Review } from "../types";

type rev = {
    _id: string;
    reviews: Review[]
}

export const paginate = (data: rev, reqPage: string) => {
    const page = parseInt(reqPage) || 1;
    const pageSize = 3;
    const startIndex = (page -1) * pageSize
    const endIndex = page * pageSize
    const reviews = data.reviews.slice(startIndex, endIndex)

    return ({
        _id: data._id,
        reviews: [...reviews],
        meta: {
            pagnation: {
                Page: page,
                PageSize: pageSize,
                PageCount: Math.ceil(data.reviews.length / pageSize),
                total: data.reviews.length
            }
        }

    })
}