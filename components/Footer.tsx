import Link from 'next/link'
import styles from './Components.module.scss'
import { Logo_black } from './Images'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Logo_black />
        <div className="row-container">
          <p>농업회사법인 마음(주)</p>
          <Link href="./about"> 회사소개 </Link>
          <Link href="./product"> 제품 및 농장 </Link>
          <Link href="./inspection"> 검사서 게시판 </Link>
          <Link href="."> 문의 </Link>
        </div>
        <hr />
        <div className="row-container">
          © 2023 농업회사법인마음(주). All rights reserved. 대표이사 : 신영민
          사업자 등록번호 : 000-00-00000 경기도 여주시 세종로 45번길 2 2층
        </div>
      </footer>
    </>
  )
}
