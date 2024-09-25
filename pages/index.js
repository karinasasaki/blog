import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Panelinha</title>
        <meta name="description" content="Created with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <h1>Página inicial</h1>
      <Link href={"/post/1"}>Post 1</Link>
    </>
  );
}