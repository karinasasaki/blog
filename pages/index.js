import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Panelinha</title>
      </Head>
      <h1>Página inicial</h1>
      <Link href={"/post/1"}>Post 1</Link>
    </>
  );
}