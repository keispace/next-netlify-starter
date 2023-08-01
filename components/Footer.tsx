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
              <Link href="/about"> 회사소개 </Link>
              <div className={styles.vr}></div>
              <Link href="/product"> 제품 및 농장 </Link>
              <div className={styles.vr}></div>
              <Link href="/inspection"> 검사서 게시판 </Link>
              <div className={styles.vr}></div>
              <Link href="/contact"> 문의 </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.wrap}>
          <div className={styles.lower}>
            © 2023 농업회사법인마음(주). All rights reserved. 대표이사 : 신영민
            사업자 등록번호 : 000-00-00000 경기도 여주시 세종로 45번길 2 2층
          </div>
        </div>
      </footer>
    </>
  )
}
