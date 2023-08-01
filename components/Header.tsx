import Link from 'next/link'
import styles from './Components.module.scss'
import { Logo_black, Logo_white } from './Images'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export default function Header() {
  const [scrolledTop, setScrolledTop] = useState(true)
  const router = useRouter()
  const getLocation = (path: string): string => {
    if (router.pathname === path) {
      return styles['on-path']
    }
    return ''
  }
  useEffect(() => {
    const onScroll = (e) => {
      setScrolledTop(e.target.documentElement.scrollTop <= 30)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })
  return (
    <div className={`${styles.header} ${scrolledTop ? '' : styles.down}`}>
      <Link href="/">
        <div>{scrolledTop ? <Logo_white /> : <Logo_black />}</div>
      </Link>
      <div className={styles.row_container}>
        <Link href="/about">
          <a className={getLocation('/about')}>회사소개</a>
        </Link>
        <Link href="/product">
          <a className={getLocation('/product')}>제품 및 농장</a>
        </Link>
        <Link href="/inspection">
          <a className={getLocation('/inspection')}>검사서 게시판</a>
        </Link>
        <Link href="/contact">
          <a className={getLocation('/contact')}>문의</a>
        </Link>
      </div>
    </div>
  )
}
