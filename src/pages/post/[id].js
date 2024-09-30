import Head from "next/head";
import { useRouter } from "next/compat/router";

export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:3001/post/${params.id}`);
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
  const router = useRouter();
  const handleVoltar = () => {
    router.back();
  }

  return (
    <>
      <Head>
        <title>Post - {post?.titulo}</title>
      </Head>
      <h1>{post?.titulo}</h1>
      <p>Data da postagem: {post?.data}</p>
      <p>Autor(a): {post?.autor === "" ? "Desconhecido" : post?.autor}</p>
      <p>Conteúdo: {post?.conteudo}</p>
      <button onClick={handleVoltar}>Voltar</button>
    </>
  );
}