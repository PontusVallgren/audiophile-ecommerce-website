import type { NextPage } from "next";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className='underline text-lg text-primary-hover'>Hello world</h1>
    </div>
  );
};

export default Home;
