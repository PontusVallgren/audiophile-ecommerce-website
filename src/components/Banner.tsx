import React from "react";

const Banner: React.FC = () => {
  return (
    <div className='bg-black h-[630px]  lg:flex lg:mx-auto'>
      <div className='bg-hero-mobile h-full bg-no-repeat bg-cover bg-center flex flex-col justify-center md:bg-hero-tablet md:items-center lg:bg-hero-desktop lg:mx-auto lg:items-start'>
        <div className='lg:w-[1024px] lg:mx-auto'>
          <div className='flex flex-col items-center text-center text-white p-6 md:w-96 lg:items-start lg:text-left'>
            <h1 className='uppercase tracking-Char10 opacity-50 text-sm mb-4 mt-14 font-thin'>
              new product
            </h1>
            <h2 className='uppercase text-4xl font-bold leading-10 tracking-widest md:text-6xl'>
              XX99 Mark II Headphones
            </h2>
            <p className='opacity-75 text-Body font-normal leading-6 my-6'>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className='btn-primary'>See Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
