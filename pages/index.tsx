import Head from 'next/head'
import style from './Home.module.scss'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>To Heart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={style.bg1}>
          <div className={style.texts}>
            <h3 style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              농업회사법인마음(주)
            </h3>
            <h1>우리 가족 건강한 밥상을 책임집니다</h1>
          </div>
        </div>
      </main>
    </div>
  )
}
