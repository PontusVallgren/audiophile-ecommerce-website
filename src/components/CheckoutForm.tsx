import React, { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: 0,
  address: "",
  zipCode: "",
  city: "",
  country: "",
};

const CheckoutForm: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState();
  const [customerDetails, setCustomerDetails] = useState(initialValues);

  const handleChange = (e: any) => {
    const { value, name, type, checked } = e.target;
    if (checked === true) {
      setPaymentMethod(value);
    }
    setCustomerDetails((prevCustomerDetails) => {
      return {
        ...prevCustomerDetails,
        [name]: value,
      };
    });
  };

  return (
    <div className='max-w-[350px] mx-auto bg-white md:max-w-[685px] lg:max-w-[1110px]'>
      <h1 className='text-3xl font-bold tracking-wider uppercase p-6'>
        Checkout
      </h1>
      <form>
        <div
          id='billing_information'
          className='flex flex-col p-6 md:max-w-[309px]'
        >
          <h2 className='text-sm font-bold tracking-wide text-primary uppercase mb-4'>
            Billing Information
          </h2>
          <div className='flex flex-col md:max-w-[309px]'>
            <label htmlFor='name' className='font-bold text-sm'>
              Name
            </label>
            <input
              className='border-2 h-14 rounded-md border-lightGray mb-6 mt-2 p-4 text-gray text-base font-bold'
              type='text'
              name='name'
              onChange={handleChange}
              value={customerDetails.name}
              required
            />
          </div>
          <div className='flex flex-col md:max-w-[309px]'>
            <label htmlFor='email' className='font-bold text-sm'>
              Email Address
            </label>
            <input
              className='border-2 h-14 rounded-md border-lightGray mb-6 mt-2 p-4 text-gray text-base font-bold md:max-w-[309px]'
              type='text'
              name='email'
              onChange={handleChange}
              value={customerDetails.email}
              required
            />
          </div>
          <div className='flex flex-col md:max-w-[309px]'>
            <label htmlFor='phoneNumber' className='font-bold text-sm'>
              Phone Number
            </label>
            <input
              className='border-2 h-14 rounded-md border-lightGray mb-6 mt-2 p-4 text-gray text-base font-bold md:max-w-[309px]'
              type='text'
              name='phoneNumber'
              onChange={handleChange}
              value={customerDetails.phoneNumber}
              required
            />
          </div>
        </div>
        <div
          id='shipping_information'
          className='flex flex-col p-6 md:max-w-[309px]'
        >
          <h2 className='text-sm font-bold tracking-wide text-primary uppercase mb-4'>
            Shipping Info
          </h2>
          <label htmlFor='address' className='font-bold text-sm'>
            Address
          </label>
          <input
            className='border-2 h-14 rounded-md border-lightGray mb-6 mt-2 p-4 text-gray text-base font-bold'
            type='text'
            name='address'
            onChange={handleChange}
            value={customerDetails.address}
            required
          />
          <label htmlFor='zipCode' className='font-bold text-sm'>
            ZIP Code
          </label>
          <input
            className='border-2 h-14 rounded-md border-lightGray mb-6 mt-2 p-4 text-gray text-base font-bold'
            type='text'
            name='zipCode'
            onChange={handleChange}
            value={customerDetails.zipCode}
            required
          />
          <label htmlFor='city' className='font-bold text-sm'>
            City
          </label>
          <input
            className='border-2 h-14 rounded-md border-lightGray mb-6 mt-2 p-4 text-gray text-base font-bold'
            type='text'
            name='city'
            onChange={handleChange}
            value={customerDetails.city}
            required
          />
          <label htmlFor='country' className='font-bold text-sm'>
            Country
          </label>
          <input
            className='border-2 h-14 rounded-md border-lightGray mb-6 mt-2 p-4 text-gray text-base font-bold'
            type='text'
            name='country'
            onChange={handleChange}
            value={customerDetails.country}
            required
          />
        </div>
        <div
          id='payment_details'
          className='flex flex-col p-6 md:max-w-[309px]'
        >
          <h2 className='text-sm font-bold tracking-wide text-primary uppercase mb-4'>
            Payment Details
          </h2>
          <label
            htmlFor='payment_method'
            className='border-2  rounded-md border-lightGray mb-6 mt-2 p-6 text-lg font-bold'
          >
            <input
              className='mr-4'
              type='radio'
              name='payment_method'
              onChange={handleChange}
              value='Swish'
            />
            Swish
          </label>
          <label
            htmlFor='payment_method'
            className='border-2  rounded-md border-lightGray mb-6 mt-2 p-6 text-lg font-bold'
          >
            <input
              className='mr-4'
              type='radio'
              name='payment_method'
              onChange={handleChange}
              value='Cash'
            />
            Cash
          </label>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
