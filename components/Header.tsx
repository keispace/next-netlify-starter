import Link from 'next/link'
import styles from './Components.module.scss'
import { Logo_black, Logo_white } from './Images'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

export default function Header() {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }

  const closeDrawer = () => {
    setOpen(false)
  }
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
      <div className={styles.mm}>
        <Button type="text" onClick={showDrawer}>
          <MenuOutlined style={{ color: scrolledTop ? '#fff' : '#000' }} />
        </Button>
        <Drawer className={styles.drawer} placement="right" onClose={closeDrawer} open={open}>
          <Link href="/about">
            <a className={getLocation('/about')} onClick={closeDrawer}>
              회사소개
            </a>
          </Link>
          <Link href="/product">
            <a className={getLocation('/product')} onClick={closeDrawer}>
              제품 및 농장
            </a>
          </Link>
          <Link href="/inspection">
            <a className={getLocation('/inspection')} onClick={closeDrawer}>
              검사서 게시판
            </a>
          </Link>
          <Link href="/contact">
            <a className={getLocation('/contact')} onClick={closeDrawer}>
              문의
            </a>
          </Link>
        </Drawer>
      </div>
    </div>
  )
}
