import Head from "next/head";
import styles from "@/styles/pages/Home.module.css"
import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/post");
  const posts = await response.json();
  return { props: {posts} }
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>BlogPost</title>
      </Head>
      <div className={styles.container}>
        {posts?.map(post => {
          return <Link key={post?.id} href={`/post/${post?.id}`} className={styles.post}>
            <h1>{post?.titulo}</h1>
            <p>{post?.resumo}</p>
          </Link>
        })}
      </div>
    </>
  );
}