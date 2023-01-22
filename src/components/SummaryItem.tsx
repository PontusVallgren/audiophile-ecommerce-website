import React from "react";
import Image from "next/image";

type CartProduct = {
  img: string;
  name: string;
  price: number;
  quantity: number;
  _id: string;
};

type SummaryItemProps = {
  product: CartProduct;
};

const SummaryItem: React.FC<SummaryItemProps> = ({ product }) => {
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
        <p className='font-bold tracking-wide'>{product.name}</p>
        <span className='text-sm opacity-50'>$ {product.price}</span>
      </div>
      <span className='ml-auto opacity-50 font-bold'>x{product.quantity}</span>
    </li>
  );
};

export default SummaryItem;
