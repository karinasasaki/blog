import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <li><Link href={"/"}>Home</Link></li>
      <li><Link href={"/new-post"}>Novo post</Link></li>
      <li><Link href={"/post/1"}>Post 1</Link></li>
    </ul>
  );
}