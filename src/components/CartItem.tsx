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
  onClick: (id: string, itemQuantity: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({ product, onClick }) => {
  /*   const onClick = () => {}; */
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
      <div className='bg-lightGray h-10 flex items-center self-center ml-auto'>
        <button
          onClick={() => onClick(product._id, product.quantity - 1)}
          className='py-2 px-4 font-bold opacity-25 cursor-pointer hover:text-primary hover:opacity-100'
        >
          -
        </button>
        <span className='font-bold'>{product.quantity}</span>
        <button
          onClick={() => onClick(product._id, product.quantity + 1)}
          className='py-2 px-4 font-bold opacity-25 cursor-pointer hover:text-primary hover:opacity-100'
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
