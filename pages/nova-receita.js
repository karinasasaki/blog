import Head from "next/head";
import Link from "next/link";

export default function NovaReceita() {
  return (
    <>
      <Head>
        <title>Panelinha - Adicionar Receita</title>
      </Head>
      <h1>Nova Receita</h1>
      <Link href={"/"}>Voltar</Link>
    </>
  );
}