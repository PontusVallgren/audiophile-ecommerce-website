import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import CartItem from "./CartItem";

type CartProduct = {
  img: string;
  name: string;
  price: number;
  quantity: number;
  _id: string;
};

type CartProps = {
  cartItems: CartProduct[];
  toggle: () => void;
};

const Cart: React.FC<CartProps> = ({ cartItems, toggle }) => {
  const { dispatch, state } = useContext(Store);
  const { cart } = state;

  useEffect(() => {
    dispatch({
      type: "CART_TOTAL_SUM",
    });
  }, [dispatch, state]);

  const handleRemove = () => {
    dispatch({
      type: "CART_REMOVE_ALL",
    });

    dispatch({
      type: "CART_TOTAL_SUM",
    });
  };

  const itemQuantityHandler = async (id: string, itemQuantity: number) => {
    const res = await fetch(`/api/products/${id}`);
    const product = await res.json();
    if (product.countInStock <= 0) {
      window.alert("Sorry, out of stock");
      return;
    }
    const productData = {
      _id: product._id,
      name: product.name,
      price: product.price,
      img: product.productImages.mobile,
    };
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...productData, quantity: itemQuantity },
    });

    dispatch({
      type: "CART_TOTAL_SUM",
    });
  };

  return (
    <div className='bg-black bg-opacity-50 fixed z-10 inset-0 top-[13vh]'>
      <div className='max-w-[365px] z-10 mx-auto p-6 rounded-md bg-white shadow-2xl absolute top-[5vh] left-[5vw] right-[5vw]'>
        <div className='flex justify-between mb-8'>
          <h1 className='text-xl font-bold uppercase tracking-widest'>
            Cart ({cartItems.length})
          </h1>
          <button
            onClick={handleRemove}
            className='hover:text-primary-hover text-m opacity-50'
          >
            Remove all
          </button>
        </div>
        <ul>
          {cartItems.map((item, index) => {
            return (
              <CartItem
                key={index}
                product={item}
                onClick={itemQuantityHandler}
              />
            );
          })}
        </ul>
        <div className='flex justify-between mb-5'>
          <p className='opacity-50'>TOTAL</p>
          <span className='text-xl font-bold'>
            $ {state.cart.cartTotalAmount}
          </span>
        </div>
        <Link href={`/checkout`}>
          <button
            onClick={toggle}
            className='btn-primary flex w-full justify-center'
          >
            CHECKOUT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
