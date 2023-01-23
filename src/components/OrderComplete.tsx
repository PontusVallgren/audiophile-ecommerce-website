import { stat } from "fs";
import Link from "next/link";
import { useContext } from "react";
import { Store } from "../utils/Store";
import SummaryItem from "./SummaryItem";

type OrderCompleteProps = {
  onClick: () => void;
};

const OrderComplete: React.FC<OrderCompleteProps> = ({ onClick }) => {
  const { dispatch, state } = useContext(Store);
  const { cart } = state;

  const handleRemove = () => {
    dispatch({
      type: "CART_REMOVE_ALL",
    });
  };

  const clearCart_backToHome = () => {
    handleRemove();
    onClick();
  };

  return (
    <div
      onClick={onClick}
      className='bg-black bg-opacity-50 fixed z-10 inset-0'
    >
      <div className=' max-w-[365px] mx-auto p-6 rounded-md bg-white shadow-2xl absolute top-[5vh] left-[5vw] right-[5vw]'>
        <div className='flex justify-between mb-8 p-2 flex-col'>
          <h1 className='text-2xl font-bold uppercase tracking-widest'>
            Thank you for your order
          </h1>
          <p className='text-m opacity-50 mt-4'>
            You will receive an email confirmation shortly.
          </p>
        </div>
        <div>
          <div className='bg-lightGray rounded-t-xl'>
            <ul className='pt-6 px-6'>
              {cart.cartItems.map((item, index) => {
                return index === 0 ? (
                  <SummaryItem key={index} product={item} />
                ) : null;
              })}
            </ul>
            <p className='mx-6 py-4 border-t border-gray text-center font-bold text-sm opacity-50'>
              and {state.cart.cartTotalQuantity - 1} other item(s)
            </p>
          </div>
          <div>
            <div className='bg-black p-6 rounded-b-xl mb-6'>
              <p className='text-lg uppercase opacity-50 text-lightGray'>
                grand total
              </p>
              <span className='text-lightGray uppercase font-bold text-lg tracking-wider'>
                $ {state.cart.cartTotalAmount}
              </span>
            </div>
          </div>
        </div>

        <Link href={`/`}>
          <button
            onClick={clearCart_backToHome}
            className='btn-primary flex w-full justify-center uppercase'
          >
            back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderComplete;
