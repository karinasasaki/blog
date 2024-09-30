import styles from "@/styles/components/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr/>
      <p>
        Desenvolvido por <Link href="https://github.com/karinasasaki" target="blank" className={styles.dev}>Karina Sasaki</Link> &copy; 2024
      </p>
    </footer>
  );
}