import Head from "next/head";
import { useRouter } from "next/compat/router";
import styles from "@/src/styles/pages/Post.module.css"

export async function getStaticProps({ params: {id} }) {
  const response = await fetch(`http://localhost:3001/post/${id}`);
  const post = await response.json();
  return { props: {post} }
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3001/post")
  const data = await response.json()

  const paths = data.map((post) => {
    return {
      params: {
        id: `${post.id}`,
      },
    }
  })

  return { paths, fallback: false }
}

export default function Post({ post }) {
  function getNomeSobrenome(nomeCompleto) {
    let arrayNomeCompleto = nomeCompleto.split(" ");
    const primeiroNome = arrayNomeCompleto[0];
    let ultimoNome = "";
    if (arrayNomeCompleto.length > 1) {
      ultimoNome = arrayNomeCompleto[arrayNomeCompleto.length - 1];
    }
    return primeiroNome + " " + ultimoNome;
  }

  const router = useRouter();
  const handleVoltar = () => {
    router.back();
  }

  return (
    <>
      <Head>
        <title>{`Post - ${post?.titulo}`}</title>
      </Head>
      <div className={styles.post}>
        <h2 className={styles.post__titulo}>{post?.titulo}</h2>
        <div className={styles.post__info}>
          <span>Postado dia {post?.data}</span>
          <span className={styles.post__info__separador}>&bull;</span>
          <span>Autor(a): {post?.autor === "" ? "Desconhecido" : getNomeSobrenome(post?.autor)}</span>
        </div>
        {post?.conteudo?.split("\n").map(paragrafo => {
          return <p key={paragrafo} className={styles.post__conteudo}>{paragrafo}</p>
        })}
        <button onClick={handleVoltar} className={styles.botaoVoltar}>Voltar</button>
      </div>
    </>
  );
}