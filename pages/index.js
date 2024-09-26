import Head from "next/head";
import styles from "@/styles/pages/Home.module.css"
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/receitas");
  const receitas = await response.json();
  return { props: {receitas} }
}

export default function Home({ receitas }) {
  return (
    <>
      <Head>
        <title>Panelinha</title>
      </Head>
      <div className={styles.container}>
        {receitas?.map(receita => {
          return <Link key={receita?.id} href={`/post/${receita?.id}`} className={styles.post}>
            <Image
              className={styles.post__foto}
              src={receita?.urlFoto}
              alt={receita?.titulo}
              width={640}
              height={427}
              priority
            />
            <h1>{receita?.titulo}</h1>
          </Link>
        })}
      </div>
    </>
  );
}