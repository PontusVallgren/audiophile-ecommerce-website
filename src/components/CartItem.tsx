import React from "react";
import Image from "next/image";

type CartProduct = {
  img: string;
  name: string;
  price: number;
  quantity: number;
  _id: string;
};

type CartItemProps = {
  product: CartProduct;
};

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const onClick = () => {};
  return (
    <li className='flex gap-4 mb-5'>
      <Image
        className='rounded'
        src={product.img}
        width={64}
        height={64}
        alt='product thumbnail'
      />
      <div className='flex-col justify-center'>
        <p>{product.name}</p>
        <span>{product.price}</span>
      </div>
      <span className='flex grow justify-end'>{product.quantity}</span>
    </li>
  );
};

export default CartItem;
