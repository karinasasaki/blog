import Head from "next/head";
import Link from "next/link";

export async function getStaticProps({ params }) {
  const response = await fetch(`http://localhost:3001/receitas/${params.id}`);
  const receita = await response.json();
  return { props: {receita} }
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3001/receitas")
  const data = await response.json()

  const paths = data.map((receita) => {
    return {
      params: {
        id: `${receita.id}`,
      },
    }
  })

  return { paths, fallback: false }
}

export default function Post({ receita }) {
  return (
    <>
      <Head>
        <title>Panelinha - {receita?.titulo}</title>
      </Head>
      <h1>{receita?.titulo}</h1>
      <p>Data da postagem: {receita?.data}</p>
      <p>Autor(a): {receita?.autor}</p>
      <h2>Ingredientes:</h2>
      <ul>
        {receita?.ingredientes?.map(ingrediente => {
          return <li key={ingrediente}>{ingrediente}</li>
        })}
      </ul>
      <h2>Modo de preparo:</h2>
      <ol>
        {receita?.comoFazer?.map(modo => {
          return <li key={modo}>{modo}</li>
        })}
      </ol>
      <Link href={"/"}>Voltar</Link>
    </>
  );
}