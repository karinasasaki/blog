import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Created with Next.js"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/Logo.svg"/>
      </Head>
      <Navbar/>
      <Component {...pageProps}/>
      <Footer/>
    </>
  );
}