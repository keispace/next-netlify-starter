import Link from 'next/link'
import styles from './Components.module.scss'
import { Logo_black } from './Images'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <Logo_black />
          <div className={styles.row_container}>
            <Link href="/">
              <h6>농업회사법인 마음(주)</h6>
            </Link>
            <div className={styles.row_inner}>
              <Link href="/about">
                <h6>회사소개 </h6>
              </Link>
              <div className={styles.vr}></div>
              <Link href="/product">
                <h6>제품 및 농장</h6>
              </Link>
              <div className={`${styles.vr}`}></div>
              <Link href="/inspection">
                <h6>검사서 게시판</h6>
              </Link>
              <div className={styles.vr}></div>
              <Link href="/contact">
                <h6>문의</h6>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.wrap}>
          <div className={styles.lower}>
            <span>© 2023 농업회사법인마음(주). All rights reserved.</span>
            <span>대표이사 신영민</span>
            <span>사업자 등록번호 : 654-86-02885</span>
            <span>경기도 여주시 세종로 45번길 2 2층</span>
          </div>
        </div>
      </footer>
    </>
  )
}
