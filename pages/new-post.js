import Link from "next/link";

export default function NewPost() {
  return (
    <>
      <h1>Nova postagem</h1>
      <Link href={"/"}>Voltar</Link>
    </>
  );
}