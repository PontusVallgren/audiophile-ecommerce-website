import type { NextPage } from "next";
import About from "../components/About";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList";
import ProductPromoGrid from "../components/Promotions/ProductPromoGrid";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <CategoryList toggle={() => console.log} />
      <ProductPromoGrid />
      <About />
    </>
  );
};

export default Home;
