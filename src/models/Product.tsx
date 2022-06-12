import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  productImages: {
    mobile: { type: String, required: true },
    tablet: { type: String, required: true },
    desktop: { type: String, required: true },
  },
  categoryImages: {
    mobile: { type: String, required: true },
    tablet: { type: String, required: true },
    desktop: { type: String, required: true },
  },
  promotionImages: {
    1: { type: String, required: true },
    2: { type: String, required: true },
    3: { type: String, required: true },
  },
  price: { type: Number, required: true },
  rating: { type: Number, required: true, default: 0 },
  numReviews: { type: Number, required: true, default: 0 },
  countInStock: { type: Number, required: true, default: 0 },
  description: { type: String, required: true },
  features: { type: String, required: true },
  reviews: [reviewSchema],
  isFeatured: { type: Boolean, required: true, default: false },
  inBox: [
    {
      product: { type: String, required: true },
      units: { type: Number, required: true },
    },
  ],
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
