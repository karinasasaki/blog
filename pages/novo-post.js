import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NovoPost() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [resumo, setResumo] = useState("");
  const router = useRouter();

  const onSubmit = async(event) => {
    event.preventDefault();

    const hoje = new Date().toLocaleDateString();
    const dados = {
      titulo,
      autor,
      resumo,
      conteudo,
      data: hoje
    };

    const response = await fetch(event.target.action, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    })

    if (response.ok) {
      router.push("/");
    }
  }

  const handleVoltar = () => {
    router.back();
  }

  return (
    <>
      <Head>
        <title>BlogPost - Novo Post</title>
      </Head>
      <h1>Novo Post</h1>
      <form method="POST" action="http://localhost:3001/post" onSubmit={onSubmit}>
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          required
          name="titulo"
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label htmlFor="autor">Autor(a)</label>
        <input
          type="text"
          name="autor"
          onChange={(e) => setAutor(e.target.value)}
        />

        <label htmlFor="resumo">Resumo</label>
        <textarea
          type="text"
          required
          name="resumo"
          onChange={(e) => setResumo(e.target.value)}
          placeholder={""}
        />

        <label htmlFor="conteudo">Conteúdo</label>
        <textarea
          type="text"
          required
          name="conteudo"
          onChange={(e) => setConteudo(e.target.value)}
        />

        <button type="submit">Postar</button>
      </form>
      <button onClick={handleVoltar}>Voltar</button>
    </>
  );
}