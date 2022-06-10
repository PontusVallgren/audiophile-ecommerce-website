import React from "react";
import Image from "next/image";
import useSetImage from "./useSetImage";

//placeholders
import phMobile from "../../public/about-mobile.jpg";
import phTablet from "../../public/about-tablet.jpg";
import phDesktop from "../../public/about-desktop.jpg";

const About: React.FC = () => {
  const image = useSetImage(phMobile, phTablet, phDesktop);

  return (
    <section className='max-w-[360px] mx-auto my-24 flex flex-col md:max-w-2xl lg:max-w-[1110px] lg:flex-row-reverse'>
      <figure className='w-full h-[300px] rounded-lg overflow-hidden lg:w-1/2 lg:h-[580px]'>
        <Image src={image} alt='product promotion' layout='responsive' />
      </figure>
      <div className='px-6 text-center lg:w-1/2 lg:flex lg:flex-col lg:justify-center lg:pr-28 lg:text-left'>
        <h1 className='uppercase text-3xl font-bold my-8  md:max-w-lg md:mx-auto md:text-4xl'>
          Bringing you the <p className='text-primary inline-block'>best</p>{" "}
          audio gear
        </h1>
        <p className='text-base font-medium opacity-50'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default About;
