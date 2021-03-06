import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="px-8 py-0">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen px-0 py-16 flex-1 flex flex-col justify-center items-center">
        <h1 className="m-0 leading-tight text-7xl text-center">
          Welcome to
          <a className="text-[#0070f3] no-underline hover:underline focus:underline active:underline" href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="text-center mx-0 my-16 leading-normal text-2xl">
          Get started by editing{' '}
          <code className="bg-[#fafafa] text-black rounded-md p-3 text-lg font-mono">pages/index.js</code>
        </p>

        <div className="flex items-center justify-center flex-wrap max-w-4xl">
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
