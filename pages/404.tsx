import styles from '../styles/Page404.module.css'
import { useState } from 'react'
import type { NextPage } from 'next'

const Page404: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>404 | Page not found</h1>
    </div>
  )
}

export default Page404
