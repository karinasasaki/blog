import Link from "next/link";
import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href={"/"} className={styles.logo}>
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={75}
          height={75}
          priority
        />
        <span className={styles.logo__nome}>
          Panelinha
        </span>
      </Link>
      <Link href={"/nova-receita"} className={styles.adicionarReceita}>
        <FontAwesomeIcon icon={faPlus}/>
        <span>
          Postar receita
        </span>
      </Link>
    </nav>
  );
}