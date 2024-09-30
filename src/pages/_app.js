import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import Main from "../components/Main";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="BlogPost - Um site de blog."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="Blog, Post"/>
        <link rel="icon" href="/Logo.svg"/>
      </Head>
      <Navbar/>
      <Main>
        <Component {...pageProps}/>
      </Main>
      <Footer/>
    </>
  );
}