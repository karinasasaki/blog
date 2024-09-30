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
          width={60}
          height={60}
          priority
        />
        <span className={styles.logo__nome}>
          BlogPost
        </span>
      </Link>

      <Link href={"/novo-post"} className={styles.botao}>
        <FontAwesomeIcon icon={faPlus}/>
        <span>
          Novo Post
        </span>
      </Link>
    </nav>
  );
}