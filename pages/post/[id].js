import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [receita, setReceita] = useState();

  const fetchData = async() => {
    try {
      const response = await fetch(`http://localhost:3001/receitas/${id}`, {
        header: {
          Accept: "application/json",
          method: "GET"
        }
      });
      if (response.ok) {
        const data = await response.json();
        setReceita(data);
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  if (!!receita) {
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
  } else {
    return (
      <p>Receita não encontrada.</p>
    )
  }
}