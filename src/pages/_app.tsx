import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { StoreProvider } from "../utils/Store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StoreProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </StoreProvider>
    </>
  );
}

export default MyApp;
