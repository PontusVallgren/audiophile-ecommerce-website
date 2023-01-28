import React from "react";
import useSetImage from "../useSetImage";
import Link from "next/link";

type promo = {
  product: string;
  category: string;
  description: string;
  path: string;
  mobile: any;
  tablet: any;
  desktop: any;
};

type ProductPromoSecondaryProps = {
  data: promo;
};

const ProductPromoSecondary: React.FC<ProductPromoSecondaryProps> = ({
  data,
}) => {
  const promoImage = useSetImage(
    data.mobile.src,
    data.tablet.src,
    data.desktop.src
  );
  return (
    <div
      className='rounded-lg bg-cover bg-no-repeat max-w-[360px] mx-auto my-6 h-[320px] md:max-w-2xl lg:max-w-[1110px]'
      style={{
        backgroundImage: `url(${promoImage})`,
      }}
    >
      <div className='max-w-[360px] flex flex-col h-full justify-center ml-6 md:ml-16'>
        <h1 className='text-3xl uppercase font-semibold mb-8'>
          {data.product} {data.category}
        </h1>
        <Link href={data.path}>
          <a className='btn-transparent'>See Product</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductPromoSecondary;
