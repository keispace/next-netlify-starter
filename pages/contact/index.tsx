import { Icon_addr, Icon_fax, Icon_tel } from '@components/Images'
import style from './Contact.module.scss'

export default function Contact() {
  return (
    <div className="container">
      <main>
        <img
          src="/contact/bg1.png"
          style={{ width: '100vw', maxHeight: '700px' }}
        />
        <div className={style.bg2}>
          <div className={style.texts}>
            <h6 style={{ color: '#43E195' }}>Contact.</h6>
            <h2>농업회사법인마음(주)</h2>
          </div>
          <img src="/contact/bg2.png" />

          <div className={style.bg3}>
            <div className={style.desc}>
              <Icon_tel width="3vw" height="3vw" />
              <h6>Tel</h6>
              <h6 className={style.grey}>031-885-8801</h6>
            </div>
            <div className={style.desc}>
              <Icon_fax width="3vw" height="3vw" />
              <h6>Fax</h6>
              <h6 className={style.grey}>031-885-8802</h6>
            </div>
            <div className={style.desc}>
              <Icon_addr width="3vw" height="3vw" />
              <h6>Address</h6>
              <h6 className={style.grey}>경기도 여주시 세종로 45번길 2 2층</h6>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
