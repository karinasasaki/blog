import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/Post.module.css"

export default function Post() {
  return (
    <Link href={"/post/bolo-de-cenoura"} className={styles.post}>
      <Image
        className={styles.post__foto}
        src="https://i.panelinha.com.br/i1/64-o-1143-blogayu4383.webp"
        alt="Bolo de cenoura"
        width={640}
        height={427}
      />
      <h1>Bolo de cenoura</h1>
      <p>Bolo fácil, rápido e prático</p>
    </Link>
  );
}