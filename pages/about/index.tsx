import style from './About.module.scss'
import dynamic from 'next/dynamic'

const OrgChart = dynamic(() => import('@components/OrgChart'), { ssr: false })
export default function About() {
  return (
    <div className="container">
      <main>
        <img
          src="/about/bg1.png"
          style={{ width: '100vw', maxHeight: '700px' }}
        />
        <div className={style.bg2}>
          <div className={style.texts}>
            <h6 style={{ color: '#43E195' }}>Organizational Chart.</h6>
            <h2>농업회사법인마음 조직도</h2>
          </div>
          <OrgChart />
        </div>

        <div className={style.bg3}>
          <div className={style.wrap}>
            <div className={style.texts}>
              <h6 style={{ color: '#43E195' }}>History</h6>
              <h2>회사연혁</h2>
            </div>
            <img
              src="/about/bg3.png"
              style={{
                width: 'calc(250 / 1920 * 100%)',
                minWidth: '125px',
                maxHeight: '200px',
              }}
            />
            <div className={style.history}>
              <div className={style.left}></div>
              <div className={style.right}>
                <img src="/about/bg4-ring.png" /> <mark>2006</mark>{' '}
                <p>충북 보은 평사농장 사육</p>
              </div>

              <div className={style.left}>
                <img src="/about/bg4-ring.png" />
                <mark>2010</mark> <p>평사농장 증설 및 증축</p>
              </div>
              <div className={style.right}></div>
              <div className={style.left}></div>
              <div className={style.right}>
                {' '}
                <img src="/about/bg4-ring.png" /> <mark>2013</mark>{' '}
                <p>일양약품 독감백신용 납품</p>
              </div>

              <div className={style.left}>
                <img src="/about/bg4-ring.png" /> <mark>2017</mark>{' '}
                <p>한국야쿠르트 납품</p>
              </div>
              <div className={style.right}></div>
              <div className={style.left}></div>
              <div className={style.right}>
                <img src="/about/bg4-ring.png" /> <mark>2023</mark>{' '}
                <p>유통전문회사 농업법인 출범</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={style.bg4}>
          <div className={style.texts}>
            <h6 style={{ color: '#43E195' }}>Partners.</h6>
            <h2>파트너사</h2>
            <h5>
              농업회사법인마음은 신선하고 안전한 제품을 위해 국내 및 해외
              파트너들과 함께 뛰고 있습니다.
            </h5>
          </div>
          <div className={style.partners}>
            <div>
              <img src="/about/ilyang.png" />
            </div>
            <div>
              <img src="/about/nh.png" />
            </div>
            <div>
              <img src="/about/naver.png" />
            </div>
            <div>
              <img src="/about/gc.png" />
            </div>
          </div>
        </div> */}
      </main>
    </div>
  )
}
