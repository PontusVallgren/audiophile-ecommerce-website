import React, { useContext, useEffect, useState } from "react";
import { product } from "../types";
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
};

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  const { dispatch, state } = useContext(Store);
  const { cart } = state;
  const [totalPrice, setTotalPrice] = useState(0);

  const handleRemove = () => {
    dispatch({
      type: "CART_REMOVE_ALL",
    });
  };

  console.log(cartItems);
  return (
    <div className='bg-black bg-opacity-50 fixed z-10 inset-0 top-[13vh]'>
      <div className='max-w-[365px] mx-auto p-8 rounded-md bg-white shadow-2xl absolute top-[5vh] left-[5vw] right-[5vw]'>
        <div className='flex justify-between'>
          <h1>Cart ({cartItems.length})</h1>
          <button onClick={handleRemove} className='hover:text-primary-hover'>
            Remove all
          </button>
        </div>
        <ul>
          {cartItems.map((item, index) => {
            return <CartItem key={index} product={item} />;
          })}
        </ul>
        <div className='flex justify-between'>
          <p>TOTAL</p>
          <span>{totalPrice}</span>
        </div>
        <button className='btn-primary'>CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
