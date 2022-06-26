type Review = {
    name: string;
    comment: string;
    rating: number;
  };

export const avgRating = (reviews: Review[]) => {
    let sumRating: number = 0;
    reviews.map((obj: Review) => {
        sumRating += obj.rating
    })
    return Math.round(sumRating / reviews.length)
}