import React from "react";

type ProductCounterProps = {
  onClick: (action: string) => void;
  counter: number;
};

const ProductCounter: React.FC<ProductCounterProps> = ({
  onClick,
  counter,
}) => {
  return (
    <div className='bg-lightGray'>
      <button
        onClick={() => onClick("SUBTRACT")}
        className='py-4 px-7 font-bold opacity-25 cursor-pointer hover:text-primary hover:opacity-100'
      >
        -
      </button>
      <span className='font-bold'>{counter}</span>
      <button
        onClick={() => onClick("ADD")}
        className='py-4 px-7 font-bold opacity-25 cursor-pointer hover:text-primary hover:opacity-100'
      >
        +
      </button>
    </div>
  );
};

export default ProductCounter;
