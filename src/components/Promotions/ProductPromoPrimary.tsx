import Link from "next/link";
import React from "react";
import useSetImage from "../useSetImage";

type promo = {
  product: string;
  category: string;
  description: string;
  path: string;
  mobile: any;
  tablet: any;
  desktop: any;
};

type ProductPromoPrimaryProps = {
  data: promo;
};

const ProductPromoPrimary: React.FC<ProductPromoPrimaryProps> = ({ data }) => {
  const promoImage = useSetImage(data.mobile, data.tablet, data.desktop);
  return (
    <div
      className='max-w-[360px] mx-auto h-[660px] md:max-w-2xl md:h-[720px] lg:max-w-[1110px] lg:h-[560px] lg:flex lg:justify-end rounded-lg bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url(${promoImage.src})`,
      }}
    >
      <div className='h-full flex flex-col justify-end text-center text-white px-10 pb-20 lg:w-2/5 lg:items-start lg:text-left'>
        <span className='text-4xl font-bold uppercase md:text-5xl'>
          <h1>{data.product}</h1>
          <h2>{data.category}</h2>
        </span>
        <p className='text-Body font-light my-6 md:px-48 lg:px-0'>
          {data.description}
        </p>
        <Link href={data.path}>
          <a className='btn-secondary mx-auto lg:mx-0'>See Product</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductPromoPrimary;
