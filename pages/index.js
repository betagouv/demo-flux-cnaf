import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lecteur de fichier CNAF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ça a changé d'endroit, maintenant c'est <a href="https://betagouv.github.io/analyse-flux-insertion/">betagouv.github.io/analyse-flux-insertion</a>&nbsp;!
        </h1>
      </main>
    </div>
  )
}
