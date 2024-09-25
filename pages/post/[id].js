import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Panelinha - Post</title>
      </Head>
      <h1>Post id: {router.query.id}</h1>
      <Link href={"/"}>Voltar</Link>
    </>
  );
}