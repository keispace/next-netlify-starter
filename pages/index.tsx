import Head from 'next/head'
import style from './Home.module.scss'
import Link from 'next/link'
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
            <h5 style={{ color: 'rgba(255, 255, 255, 0.8)' }}>농업회사법인마음(주)</h5>
            <h1>우리 가족 건강한 밥상을 책임집니다</h1>
          </div>
        </div>

        <div className={style.bg2}>
          <div className={style.texts}>
            <h6 style={{ color: '#43E195' }}>Point</h6>
            <h2>믿고 먹을 수 있는 먹거리를 위한 농업회사법인마음의 노력</h2>
          </div>
          <div className={style.img}>
            <div className={style.texts}>
              <h3>매주 검사하는 유정란</h3>
              <h5>
                <mark>동물복지 순백유정란</mark>은 건강하고 신선한 밥상을 위해 충남대학교 수의과대학 연구실과 협력하여
                매주 주 1회 대장균 및 살모넬라 검사를 시행하고 있습니다.
              </h5>
            </div>
          </div>
          <Link href="/about">
            <button className={style.btn}> 회사소개 보러가기 </button>
          </Link>
        </div>

        <div className={style.bg3}>
          <div className={style.texts}>
            <h6 style={{ color: '#43E195' }}>Product & Farm.</h6>
            <h2>
              동물복지
              <br />
              순백유정란
            </h2>
            <h5>
              동물복지 순백유정란은 깨끗하고 <br />
              위생적인 시설에서 자란 닭들이 낳아,
              <br />
              독감백신 제조용으로 납품될 만큼 안전과 <br />
              신선도가 보장된 유정란입니다.
            </h5>
            <Link href="/product">
              <button className={style.btn}> 더 알아보기 </button>
            </Link>
          </div>
          <img src="/home/bg3.webp" />
        </div>

        <div className={style.bg4}>
          <div className={style.texts}>
            <h6 style={{ color: '#43E195' }}>Inspection board.</h6>
            <h2>검사서 게시판 </h2>
            <h5>미생물 검출 실험 결과 통보서를 확인해보세요.</h5>
          </div>
          <div className={style.img4}>
            {/* <div className={style.texts}> */}
            <h5>
              동물복지 순백유정란은 배대지를 이용한 salmonella
              <br />
              (gailinarum, pullorum, typhimurium, enteritidis),
              <br />
              Escherichia coli 검출 실험을 주에 1회씩 실시합니다.
            </h5>
            {/* </div> */}
          </div>
          <Link href="/inspection">
            <button className={style.btn}> 검사서 확인하기 </button>
          </Link>
          <div className={style.img5}>
            <div className={style.wrap}>
              <div className={style.texts}>
                <h6 style={{ color: '#43E195' }}>Contact.</h6>
                <h4>농업회사법인마음에 문의사항이 있으신가요?</h4>
              </div>
              <Link href="/contact">
                <button className={`${style.btn} ${style.black}`}>문의하기</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
