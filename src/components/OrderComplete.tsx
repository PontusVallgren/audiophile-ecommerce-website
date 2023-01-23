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

  return (
    <div className='bg-black bg-opacity-50 fixed z-10 inset-0'>
      <div className=' max-w-[365px] mx-auto p-6 rounded-md bg-white shadow-2xl absolute top-[5vh] left-[5vw] right-[5vw]'>
        <div className='flex justify-between mb-8 flex-col'>
          <h1 className='text-xl font-bold uppercase tracking-widest'>
            Thank you for your order
          </h1>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <div>
          <div className='bg-lightGray rounded-t-lg'>
            <ul className='p-6'>
              {cart.cartItems.map((item, index) => {
                return <SummaryItem key={index} product={item} />;
              })}
            </ul>
            <p className='mx-6 py-4 border-t border-gray text-center'>
              and X other item(s)
            </p>
          </div>
          <div>
            <div className='bg-black p-6 rounded-b-lg mb-6'>
              <p>grand total</p>
              <span>$ price</span>
            </div>
          </div>
        </div>

        <Link href={`/`}>
          <button
            onClick={onClick}
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
