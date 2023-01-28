import React from "react";
import Image, { StaticImageData } from "next/image";
import placeholder from "../../public/thumbnail-headphones.png";
import iconArrow from "../../public/icon-arrow-right.svg";
import Link from "next/link";

type CategoryListItemProps = {
  category: string;
  path: string;
  thumbnail: StaticImageData;
  toggle: () => void;
};

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  category,
  path,
  thumbnail,
  toggle,
}) => {
  return (
    <div className='w-80 h-56 relative flex items-center flex-col m-4'>
      <div className='w-32 h-28 relative'>
        <Image alt='product' src={thumbnail} layout='fill' />
      </div>
      <Link href={path}>
        <a className='uppercase text-lg my-3 font-bold tracking-wider'>
          {category}
        </a>
      </Link>
      <Link href={path}>
        <a
          onClick={toggle}
          className='uppercase text-sm p-3 font-normal tracking-wide hover:text-primary'
        >
          Shop <Image src={iconArrow} alt='icon arrow' />
        </a>
      </Link>
      <div className='bg-lightGray min-w-full h-44 absolute bottom-0 rounded-lg -z-10'></div>
    </div>
  );
};

export default CategoryListItem;
