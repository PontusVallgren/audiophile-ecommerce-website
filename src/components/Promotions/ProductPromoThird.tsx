import Link from "next/link";
import Image from "next/image";
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

type ProductPromoThirdProps = {
  data: promo;
};

const ProductPromoThird: React.FC<ProductPromoThirdProps> = ({ data }) => {
  const promoImage = useSetImage(
    data.mobile.src,
    data.tablet.src,
    data.desktop.src
  );
  return (
    <div className='max-w-[360px] h-[425px] mx-auto flex flex-col md:flex-row md:max-w-2xl md:h-[320px] lg:max-w-[1110px]'>
      <figure className='w-full h-1/2 relative rounded-lg overflow-hidden mb-2 md:h-full md:mr-2'>
        <Image src={promoImage} alt='promo' layout='fill' />
      </figure>
      <div className='bg-lightGray w-full h-1/2 mt-2  rounded-lg flex flex-col justify-center md:h-full md:mt-0 md:ml-2'>
        <h1 className='text-3xl uppercase font-semibold mb-8 pl-6 lg:pl-12'>
          {data.product} {data.category}
        </h1>
        <Link href={data.path}>
          <a className='btn-transparent ml-6 lg:ml-12'>See Product</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductPromoThird;
