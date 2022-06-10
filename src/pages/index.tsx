import type { NextPage } from "next";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList";
import Navbar from "../components/Navbar";
import ProductPromoGrid from "../components/Promotions/ProductPromoGrid";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CategoryList />
      <ProductPromoGrid />
      <h1 className='underline text-lg text-primary-hover font-manrope'>
        Hello world
      </h1>
    </div>
  );
};

export default Home;
