import React from "react";
import Image from "next/image";
import Link from "next/link";
import { product } from "../types";
import useSetImage from "./useSetImage";

type CategoryProductProps = {
  index: number;
  product: product;
};

const CategoryProduct: React.FC<CategoryProductProps> = ({
  product,
  index,
}) => {
  const image = useSetImage(
    product.categoryImages.mobile,
    product.categoryImages.tablet,
    product.categoryImages.desktop
  );
  return (
    <div
      className={
        index % 2
          ? "flex flex-col my-12 items-center lg:flex-row-reverse lg:justify-center"
          : "flex flex-col my-12 items-center lg:flex-row lg:justify-center"
      }
    >
      <div className='h-[350px] w-80 relative overflow-hidden rounded-lg md:w-[685px] lg:w-[540px] lg:h-[560px]'>
        <Image src={image} alt='product thumbnail' layout='fill' />
      </div>
      <div className='max-w-xs my-3 text-center md:max-w-md lg:text-left lg:mx-24'>
        {product.isFeatured && (
          <h2 className='text-sm font-light tracking-Char10 text-primary uppercase my-6'>
            new product
          </h2>
        )}
        <h1 className='text-3xl my-3 font-bold uppercase tracking-wide md:text-5xl'>
          {product.name}
        </h1>
        <p className='text-base font-medium opacity-50 leading-7 my-6'>
          {product.description}
        </p>
        <Link href={`/product/${product.slug}`}>
          <a className='btn-primary'>See Product</a>
        </Link>
      </div>
    </div>
  );
};

export default CategoryProduct;
