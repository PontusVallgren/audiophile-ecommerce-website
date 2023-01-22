import { NextPage } from "next";
import React from "react";
import CheckoutForm from "../../components/CheckoutForm";
import Summary from "../../components/Summary";

const Checkout: NextPage = () => {
  return (
    <div className='bg-lightGray p-4'>
      <CheckoutForm />
      <Summary />
    </div>
  );
};

export default Checkout;
