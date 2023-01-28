import { useContext, useState } from "react";
import { Store } from "../utils/Store";
import OrderComplete from "./OrderComplete";
import SummaryItem from "./SummaryItem";

const Summary: React.FC = () => {
  const { dispatch, state } = useContext(Store);
  const { cart } = state;
  const [OrderCompleteWindow, setOrderCompleteWindow] =
    useState<boolean>(false);

  const toggleOrderComplete = () => {
    setOrderCompleteWindow(!OrderCompleteWindow);
  };

  return (
    <div className='max-w-[350px] mx-auto bg-white md:max-w-[685px] lg:max-w-[1110px] mt-4 rounded-md p-6'>
      <h1 className='text-xl font-bold tracking-wider uppercase mb-6'>
        Summary
      </h1>
      <ul>
        {cart.cartItems.map((item, index) => {
          return <SummaryItem key={index} product={item} />;
        })}
      </ul>
      <div className='flex justify-between'>
        <span className='uppercase opacity-50'>total price</span>
        <span className='font-bold text-xl'>${cart.cartTotalAmount}</span>
      </div>
      <button
        onClick={toggleOrderComplete}
        className='btn-primary flex w-full justify-center mt-4 md:max-w-[309px] md:ml-auto'
      >
        CONTINUE & PAY
      </button>
      {OrderCompleteWindow && <OrderComplete onClick={toggleOrderComplete} />}
    </div>
  );
};

export default Summary;
