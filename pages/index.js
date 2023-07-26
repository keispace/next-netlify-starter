import Head from 'next/head'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>To Heart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img width="100%" src="/1.jpg" />
        <img width="100%" src="/2.jpg" />
        <img width="100%" src="/3.jpg" />
        <img width="100%" src="/4.jpg" />
        <img width="100%" src="/5.jpg" />
        <img width="100%" src="/6.jpg" />
        <img width="100%" src="/7.jpg" />
        <img width="100%" src="/8.jpg" />
        <img width="100%" src="/9.jpg" />
      </main>

    </div>
  )
}
