import Link from "next/link";
import Image from "next/image";
import React from "react";

import logo from "../../public/logo.svg";
import fb from "../../public/icon-facebook.svg";
import tw from "../../public/icon-twitter.svg";
import insta from "../../public/icon-instagram.svg";

const Footer: React.FC = () => {
  const menu = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "headphones",
      path: "/category/headphones",
    },
    {
      name: "speakers",
      path: "/category/speakers",
    },
    {
      name: "earphones",
      path: "/category/earphones",
    },
  ];

  const socials = [
    {
      alt: "facebook icon",
      path: "https://facebook.com/",
      icon: fb,
    },
    {
      alt: "twitter icon",
      path: "https://twitter.com/",
      icon: tw,
    },
    {
      alt: "instagram icon",
      path: "https://instagram.com/",
      icon: insta,
    },
  ];
  return (
    <footer className='bg-black text-white'>
      <div className='flex flex-col items-center md:items-start md:px-4 lg:p-12'>
        <div className='mt-10 lg:w-full lg:flex lg:justify-between'>
          <div className='pb-8'>
            <Link href='/'>
              <a className='p-2 md:p-0'>
                <Image src={logo} alt='company logo' width={143} height={25} />
              </a>
            </Link>
          </div>

          <div className='flex flex-col text-center md:text-left md:flex-row'>
            {menu.map((item) => {
              return (
                <Link key={item.name} href={item.path}>
                  <a className='p-2 uppercase text-xs tracking-widest font-bold hover:text-primary md:pl-0 md:mr-10'>
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <p className='p-7 text-center text-sm font-medium opacity-50 leading-6 md:text-left md:pl-0 lg:w-1/2'>
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </p>
        </div>
        <div className='w-full flex flex-col items-center mb-10 md:flex-row md:justify-between'>
          <span className='text-sm font-bold opacity-50 mb-6 md:mb-0'>
            Copyright 2021. All Rights Reserved
          </span>
          <div>
            {socials.map((item, index) => {
              return (
                <Link href={item.path} passHref={true} key={index}>
                  <span className='px-2 hover:cursor-pointer lg:mr-10'>
                    <Image src={item.icon} alt={item.alt} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
