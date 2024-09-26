import Head from "next/head";
import styles from "@/styles/pages/Home.module.css"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [receitas, setReceitas] = useState();

  const fetchData = async() => {
    try {
      const response = await fetch("http://localhost:3001/receitas", {
        header: {
          Accept: "application/json",
          method: "GET"
        }
      });
      if (response) {
        const data = await response.json();
        setReceitas(data);
      }
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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