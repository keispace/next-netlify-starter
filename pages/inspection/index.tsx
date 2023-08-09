'use client'
import { promises as fs } from 'fs'
import path from 'path'
import { Image } from 'antd'
import styles from './Inspection.module.scss'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const setDate = (fileName: string) => {
  const date = fileName.split('.')[0]
  const year = date.slice(0, 4)
  const month = date.slice(4, 6)
  const day = date.slice(6)
  return [year, month, day].join('.')
}

function Inspection({ fileNames, pagings, itemPerPage }) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const page = isNaN(+router.query.page) ? 1 : +router.query.page
  const setList = (arr: number[], cur: number) => {
    const perList = 10
    const toSmall = arr.length - cur > perList - 1
    if (!toSmall) {
      return arr.slice(arr.length - perList)
    }
    return arr.slice(cur, cur + 5)
  }

  return (
    <div className="container">
      {isClient ? (
        <main>
          <img src="/inspection/bg1.png" style={{ width: '100vw', maxHeight: '700px' }} />

          <div className={styles.bg2}>
            <div className={styles.texts}>
              <h6 style={{ color: '#43E195' }}>Contact.</h6>
              <h2>검사서 게시판</h2>
            </div>
            <div className={styles.imagegrid}>
              {fileNames.slice((page - 1) * itemPerPage, page * itemPerPage).map((fileName) => (
                <div key={'inspection' + fileName}>
                  <Image src={`/inspection/result/${fileName}`} />
                  <h6 className={styles.gray}>{setDate(fileName)}</h6>
                  <h6>미생물 검출 실험 결과 통보서</h6>
                </div>
              ))}
            </div>

            <div className={styles.pages}>
              <Link href={{ pathname: '/inspection', query: { page: page > 1 ? page - 1 : 1 } }}>
                <div>{'< 이전'}</div>
              </Link>
              {setList(pagings, page - 1).map((i) => (
                <Link href={{ pathname: '/inspection', query: { page: i } }}>
                  <div className={i === page ? styles.active : ''} key={`paging+${i}`}>
                    {i}
                  </div>
                </Link>
              ))}
              <Link
                href={{
                  pathname: '/inspection',
                  query: { page: page < pagings.length ? page + 1 : pagings.length },
                }}>
                <div>{'다음 >'}</div>
              </Link>
            </div>
          </div>
        </main>
      ) : null}
    </div>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'public', 'inspection', 'result')
  const filenames = await fs.readdir(postsDirectory)
  const itemPerPage = 8
  return {
    props: {
      fileNames: filenames.sort((a, b) => (b > a ? 1 : -1)),
      pagings: Array.from(Array(Math.ceil(filenames.length / itemPerPage))).map((v, i) => i + 1),
      itemPerPage,
    },
  }
}

export default Inspection
