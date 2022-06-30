import React, { useContext, useState } from "react";
import Image from "next/image";
import useSetImage from "./useSetImage";
import { product } from "../types";
import { Store } from "../utils/Store";
import ProductCounter from "./ProductCounter";

type ProductSpecProps = {
  data: product;
};

const ProductSpec: React.FC<ProductSpecProps> = ({ data }) => {
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const { dispatch } = useContext(Store);
  const image = useSetImage(
    data.productImages.mobile,
    data.productImages.tablet,
    data.productImages.desktop
  );

  const itemQuantityHandler = (action: string) => {
    if (action === "ADD") {
      setItemQuantity(itemQuantity + 1);
    } else if (action === "SUBTRACT" && itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const addToCartHandler = async () => {
    const res = await fetch(`/api/products/${data._id}`);
    const product = await res.json();
    if (product.countInStock <= 0) {
      window.alert("Sorry, out of stock");
      return;
    }
    const productData = {
      _id: data._id,
      name: data.name,
      price: data.price,
      img: data.productImages.mobile,
    };
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...productData, quantity: itemQuantity },
    });
  };
  return (
    <>
      <div className='max-w-[350px] mx-auto my-10 md:max-w-[685px] md:flex md:justify-between lg:max-w-[1110px] lg:justify-between'>
        <div className='h-[350px] relative overflow-hidden rounded-lg md:w-1/2 md:h-[480px]'>
          <Image src={image} alt='product thumbnail' layout='fill' />
        </div>
        <div className='max-w-xs my-3 md:w-1/2  lg:max-w-[450px] lg:text-left'>
          {data.isFeatured && (
            <h2 className='text-sm font-light tracking-Char10 text-primary uppercase my-6'>
              new product
            </h2>
          )}
          <h1 className='text-3xl my-3 font-bold uppercase tracking-wide md:text-5xl'>
            {data.name}
          </h1>
          <p className='text-base font-medium opacity-50 leading-7 my-6'>
            {data.description}
          </p>
          <span className='text-lg font-bold tracking-wider'>
            $ {data.price}
          </span>
          <div className='flex mt-4'>
            <ProductCounter
              onClick={itemQuantityHandler}
              counter={itemQuantity}
            />
            <button className='btn-primary ml-4' onClick={addToCartHandler}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className='max-w-[350px] mx-auto my-10 md:max-w-[685px] lg:max-w-[1110px] lg:flex lg:justify-between'>
        <div className='lg:w-1/2'>
          <h1 className='uppercase text-2xl font-bold leading-6 my-8 md:text-4xl'>
            features
          </h1>
          <p className='opacity-50 font-light leading-6'>{data.features}</p>
        </div>
        <div className='my-8 md:flex md:justify-between lg:flex-col'>
          <h1 className='max-w-[350px] uppercase text-2xl font-bold leading-6 mb-8 md:text-4xl'>
            in the box
          </h1>
          <div>
            {data.inBox.map((item, index) => {
              return (
                <div key={index} className='mb-2'>
                  <span className='text-primary font-bold mr-6'>
                    {item.units}x
                  </span>
                  <span className='opacity-50 font-medium leading-4'>
                    {item.product}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSpec;
