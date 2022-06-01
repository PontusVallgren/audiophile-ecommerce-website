import React from "react";
import Image from "next/image";
import Link from "next/link";
import hamburgerIcon from "../assets/shared/tablet/icon-hamburger.svg";
import logo from "../assets/shared/desktop/logo.svg";

const Navbar: React.FC = () => {
  const menu = [
    {
      name: "headphones",
      path: "/headphones",
    },
    {
      name: "speakers",
      path: "/speakers",
    },
    {
      name: "earphones",
      path: "/earphones",
    },
  ];
  return (
    <div className='bg-black min-w-full'>
      <nav className='h-24 bg-black max-w-5xl flex items-center mx-auto border-b border-white lg:justify-between'>
        <button
          onClick={() => console.log("open modal")}
          className='ml-8 flex lg:hidden'
        >
          <Image src={hamburgerIcon} alt='icon' width={17} height={17} />
        </button>
        <Link href='/'>
          <a className='ml-8 flex'>
            <Image src={logo} alt='company logo' width={143} height={25} />
          </a>
        </Link>
        <div className='text-white hidden lg:flex lg:justify-between lg:w-2/5 lg:uppercase lg:tracking-widest lg:text-sm'>
          {menu.map((item) => {
            return (
              <Link key={item.name} href={item.path}>
                <a className='hover:text-primary'>{item.name}</a>
              </Link>
            );
          })}
        </div>
        <span className='flex grow justify-end mr-4 lg:grow-0'>
          <button onClick={() => console.log("click")} className='p-2'>
            <svg
              className='cursor-pointer fill-white hover:fill-primary'
              xmlns='http://www.w3.org/2000/svg'
              width='23'
              height='20'
              viewBox='0 0 512 512'
            >
              <path d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z' />
            </svg>
          </button>
          <button onClick={() => console.log("click")} className='p-2'>
            <svg
              className='cursor-pointer hover:stroke-primary'
              width='23'
              height='20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z'
                fill='#FFF'
              />
            </svg>
          </button>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
