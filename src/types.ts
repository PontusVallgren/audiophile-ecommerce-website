export type product = {
    name: string;
    slug: string;
    category: string;
    productImages: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    categoryImages: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    promotionImages: {
      1: string;
      2: string;
      3: string;
    };
    price: number;
    rating: number;
    numReviews: number;
    countInStock: number;
    description: string;
    features: string;
    reviews: [
      {
        name: string;
        rating: number;
        comment: string;
      }
    ];
    isFeatured: boolean;
    inBox: [
      {
        product: string;
        units: number;
      }
    ];
  };