import Link from 'next/link'
import styles from './Components.module.scss'
import { Logo_black, Logo_white } from './Images'
import { useEffect, useState } from 'react'
export default function Header() {
  const [scrolledTop, setScrolledTop] = useState(true)

  useEffect(() => {
    const onScroll = (e) => {
      setScrolledTop(e.target.documentElement.scrollTop === 0)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })
  return (
    <div className={`${styles.header} ${scrolledTop ? '' : styles.down}`}>
      <Link href=".">{scrolledTop ? <Logo_white /> : <Logo_black />}</Link>
      <div className="row-container">
        <Link href="./about"> 회사소개 </Link>
        <Link href="./product"> 제품 및 농장 </Link>
        <Link href="./inspection"> 검사서 게시판 </Link>
        <Link href="."> 문의 </Link>
      </div>
    </div>
  )
}
