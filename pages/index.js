import Post from "@/components/Post";
import Head from "next/head";
import styles from "@/styles/pages/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Panelinha</title>
      </Head>
      <div className={styles.container}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </>
  );
}