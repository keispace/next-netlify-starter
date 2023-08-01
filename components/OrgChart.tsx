import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart'
import styles from './Components.module.scss'

export default () => (
  <div className={styles.org}>
    {document ? (
      <Tree
        lineWidth={'1px'}
        lineStyle="dashed"
        lineColor={'#43E195'}
        label={<div className={styles.ceo}>CEO</div>}
      >
        {/* <div className={styles.line}></div> */}
        <TreeNode
          label={
            <div className={`${styles.lv1wrap}`}>
              <div className={styles.lv1}>상품 기획팀</div>
              <div className={styles.desc}>신규 상품 및 브랜드 기획</div>
              <div className={styles.desc}>유통 채널 운영</div>
              <div className={styles.desc}>물류 협력사 관리</div>
            </div>
          }
        ></TreeNode>
        <TreeNode
          label={
            <div className={styles.lv1wrap}>
              <div className={styles.lv1}>해외 기획팀</div>
              <div className={styles.desc}>해외상품 및 브랜드 소싱</div>
              <div className={styles.desc}>해외 파트너사 제휴</div>
            </div>
          }
        ></TreeNode>
        <TreeNode
          label={
            <div className={styles.lv1wrap}>
              <div className={styles.lv1}>경영 관리팀</div>
              <div className={styles.desc}>경영지원 업무</div>
              <div className={styles.desc}>운영 및 관리</div>
            </div>
          }
        ></TreeNode>
        <TreeNode
          label={
            <div className={`${styles.lv1wrap} ${styles.last}`}>
              <div className={styles.lv1}>생산 관리팀</div>
              <div className={styles.desc}>제품 생산 및 품질 관리</div>
            </div>
          }
        ></TreeNode>
      </Tree>
    ) : null}
  </div>
)
