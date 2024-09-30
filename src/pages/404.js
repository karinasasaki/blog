import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h3>404</h3>
      <p>Página não encontrada!</p>
      <Link href="/">Ir para a página inicial</Link>
    </>
  )
}