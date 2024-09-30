import Head from "next/head";
import { useRouter } from "next/compat/router";
import { useState } from "react";
import styles from "@/src/styles/pages/NovoPost.module.css"

export default function NovoPost() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [conteudo, setConteudo] = useState("");
  const router = useRouter();

  const onSubmit = async(event) => {
    event.preventDefault();

    const hoje = new Date().toLocaleDateString();
    const dados = {
      titulo,
      autor,
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
      
      <div className={styles.container}>
        <h2 className={styles.form__titulo}>Novo Post</h2>
        <form method="POST" action="http://localhost:3001/post" onSubmit={onSubmit} className={styles.form}>
          <label htmlFor="titulo" className={styles.form__label}>Título</label>
          <input
            type="text"
            required
            id="titulo"
            className={styles.form__input}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <label htmlFor="autor" className={styles.form__label}>Autor(a)</label>
          <input
            type="text"
            id="autor"
            className={styles.form__input}
            onChange={(e) => setAutor(e.target.value)}
          />

          <label htmlFor="conteudo" className={styles.form__label}>Conteúdo</label>
          <textarea
            type="text"
            required
            id="conteudo"
            rows="6"
            className={styles.form__input}
            onChange={(e) => setConteudo(e.target.value)}
          />

          <button type="submit" className={styles.botaoPostar}>Postar</button>
        </form>
        <button onClick={handleVoltar} className={styles.botaoVoltar}>Voltar</button>
      </div>
    </>
  );
}