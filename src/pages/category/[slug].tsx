import { GetServerSideProps, NextPage } from "next";
import Product from "../../models/Product";
import React from "react";
import db from "../../utils/db";
import CategoryProduct from "../../components/CategoryProduct";
import { product } from "../../types";
import CategoryList from "../../components/CategoryList";
import About from "../../components/About";

export const getServerSideProps: GetServerSideProps = async (context) => {
  db.connect();
  const slug = context.params!.slug;
  const res = await Product.find({ category: slug });
  const data = JSON.parse(JSON.stringify(res));
  return {
    props: {
      category: slug,
      products: data,
    },
  };
};

type CategoryProps = {
  category: string;
  products: product[];
};

const Category: NextPage<CategoryProps> = ({ products, category }) => {
  return (
    <>
      <div className='w-full h-28 bg-black flex items-center justify-center'>
        <h1 className='uppercase font-bold text-2xl text-white tracking-widest'>
          {category}
        </h1>
      </div>
      <div>
        {products.map((item: product, index: number) => {
          return <CategoryProduct key={index} index={index} product={item} />;
        })}
      </div>
      <CategoryList />
      <About />
    </>
  );
};

export default Category;
