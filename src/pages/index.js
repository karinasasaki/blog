import Head from "next/head";
import styles from "@/styles/pages/Home.module.css"
import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/post");
  const posts = await response.json();
  return { props: {posts} }
}

export default function Home({ posts }) {
  function getNomeSobrenome(nomeCompleto) {
    let arrayNomeCompleto = nomeCompleto.split(" ");
    const primeiroNome = arrayNomeCompleto[0];
    let ultimoNome = "";
    if (arrayNomeCompleto.length > 1) {
      ultimoNome = arrayNomeCompleto[arrayNomeCompleto.length - 1];
    }
    return primeiroNome + " " + ultimoNome;
  }

  return (
    <>
      <Head>
        <title>BlogPost</title>
      </Head>
      {posts?.map(post => {
        return (
          <div key={post?.id} className={styles.post}>
            <h2 className={styles.post__titulo} title={post?.titulo}>
              <Link href={`/post/${post?.id}`}>
                {post?.titulo}
              </Link>
            </h2>
            <div className={styles.post__info}>
              <span>Postado dia {post?.data}</span>
              <span className={styles.post__info__separador}>&bull;</span>
              <span>Autor(a): {post?.autor === "" ? "Desconhecido" : getNomeSobrenome(post.autor)}</span>
            </div>
            <p className={styles.post__resumo}>{post?.conteudo}</p>
            <Link href={`/post/${post?.id}`}>
              <span className={styles.post__link}>Leia mais →</span>
            </Link>
          </div>
      )})}
    </>
  );
}