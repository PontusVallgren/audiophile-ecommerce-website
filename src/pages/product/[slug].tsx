import { GetServerSideProps, NextPage } from "next";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params!.slug;
  console.log(id);

  return {
    props: {
      id: id,
    },
  };
};

const Product: NextPage = () => {
  return <div>Checkout my product</div>;
};

export default Product;
