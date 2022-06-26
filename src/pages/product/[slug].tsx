import { GetServerSideProps, NextPage } from "next";
import React from "react";
import db from "../../utils/db";
import Products from "../../models/Product";
import { product } from "../../types";
import ProductSpec from "../../components/ProductSpec";
import Reviews from "../../components/Reviews";
import CategoryList from "../../components/CategoryList";
import About from "../../components/About";

export const getServerSideProps: GetServerSideProps = async (context) => {
  await db.connect();
  const slug = context.params!.slug;
  const res = await Products.findOne({ slug });
  const products = JSON.parse(JSON.stringify(res));

  return {
    props: {
      products: db.convertDocToObj(products),
    },
  };
};

type ProductProps = {
  products: product;
};

const Product: NextPage<ProductProps> = ({ products }) => {
  return (
    <div>
      <ProductSpec data={products} />
      <Reviews reviews={products.reviews} />
      <CategoryList />
      <About />
    </div>
  );
};

export default Product;
