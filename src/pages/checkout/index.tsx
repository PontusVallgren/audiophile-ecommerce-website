import { NextPage } from "next";
import React from "react";
import CheckoutForm from "../../components/CheckoutForm";

const Checkout: NextPage = () => {
  return (
    <div className='bg-lightGray'>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
