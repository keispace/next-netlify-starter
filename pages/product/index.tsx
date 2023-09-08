import style from './Product.module.scss'

const Tags = ({ title, text }) => (
  <div className={style.tag}>
    <label className={style['tag-title']}>{title}</label>
    <label className={style['tag-text']}>{text}</label>
  </div>
)
export default function Product() {
  return (
    <div className="container">
      <main>
        <img src="/product/bg1.png" style={{ width: '100vw', maxHeight: '700px' }} />
        <div className={style.package}>
          <h6 style={{ color: '#43E195' }}>Product Package.</h6>
          <h3 className={`${style.mark} ${style.h3}`}>10구 - 8,500원</h3>
          <div className={style.imgs}>
            <img src="/home/bg3-1.webp" />
            <img src="/home/bg3-2.webp" />
          </div>
        </div>
        <div className={style.bg2}>
          <div className={style.texts}>
            <h6 style={{ color: '#43E195' }}>Feature.</h6>
            <h2>동물복지 순백유정란의 특징</h2>
            <h3>01. 파프리카 복용</h3>
            <h6 className={style.shrink}>
              동물복지 순백유정란은 보조사료인(시아레드) 파프리카 가루를 복용시킴으로 인해
            </h6>
            <h6 className={style.mark}>
              불포화지방산 함량이 높습니다. 계란 노른자의 색이 오렌지 색에 가깝게 나타나는 특성이 있습니다.
            </h6>
          </div>
          <div className={style.imgs}>
            <img src="/product/bg2-1.png" />
            <img src="/product/bg2-2.png" />
          </div>
        </div>

        <div className={style.bg3}>
          <div className={style.texts}>
            <h3>02. 매주 주 1회 미생물 검사</h3>
            <h6>충남대학교 수의과대학 연구실과 협력하여</h6>
            <h6 className={style.mark}>대장균 및 살모넬라 검사를 매주 시행하고 있습니다.</h6>
          </div>
          <div className={style.imgs}>
            <img src="/product/bg3.png" />
          </div>
        </div>

        <div className={style.bg4}>
          <div className={style.texts}>
            <h3>03. 독감백신의 원료</h3>
            <h6>독감백신 제조용으로 남품되어</h6>
            <h6 className={style.mark}>안전과 신선도가 보장된 유정란입니다.</h6>
          </div>
          <div className={style.imgs}>
            <img src="/product/bg4-1.png" />
            <img src="/product/bg4-2.png" />
          </div>
        </div>

        <div className={style.bg5}>
          <div className={style.texts}>
            <h6 style={{ color: '#43E195' }}>Farm.</h6>
            <h2>동물복지 순백유정란 사육농장</h2>
          </div>
          <div className={style.imgs}>
            {/* <img src="/product/bg5-1.png" /> */}
            <img src="/product/bg5-2.png" />
            <img src="/product/bg5-3.png" />
            {/* <img src="/product/bg5-4.png" /> */}
            <img src="/product/bg5-5.png" />
            <img src="/product/bg5-6.png" />
          </div>
          <div className={style.tags}>
            <Tags title={'농장'} text={'충남 부여군'} />
            <Tags title={'일 생산량'} text={'5만 2천구'} />
          </div>
        </div>

        <div className={style.bg6}>
          <div className={style.texts}>
            <h2>농장 인증정보</h2>
            <div className={style.wrap}>
              <img src="/product/bg6.png" />
              <h6>
                동물복지 순백유정란은 배대지를 이용한
                <br /> salmonella(gailinarum, pullorum, typhimurium, enteritidis),
                <br />
                Escherichia coli 검출 실험을 <mark>주에 1회씩 실시</mark>합니다.
              </h6>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
