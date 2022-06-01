import React from "react";
import Image, { StaticImageData } from "next/image";
import placeholder from "../../public/thumbnail-headphones.png";
import iconArrow from "../../public/icon-arrow-right.svg";
import Link from "next/link";

type CategoryListItemProps = {
  category: string;
  path: string;
  thumbnail: StaticImageData;
};

const CategoryListItem: React.FC<CategoryListItemProps> = ({
  category,
  path,
  thumbnail,
}) => {
  return (
    <div className='w-80 h-56 relative flex items-center flex-col m-4'>
      <div className='w-32 h-28 relative'>
        <Image alt='product' src={thumbnail} layout='fill' priority />
      </div>
      <Link href={path}>
        <a className='uppercase text-lg my-3'>{category}</a>
      </Link>
      <Link href={path}>
        <a className='uppercase text-sm p-3 hover:text-primary'>
          Shop <Image src={iconArrow} alt='icon arrow' />
        </a>
      </Link>
      <div className='bg-lightGray min-w-full h-44 absolute bottom-0 rounded-lg -z-10'></div>
    </div>
  );
};

export default CategoryListItem;
