import Logo from '../../public/images/logo.png'
import styles from '../../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
const Header: React.FC = () => {
  const navigate = () => {
    Router.push('/')
  }

  return (
    <header className={`${styles.slide_in_top} ${styles.header}`}>
      <div className={styles.logo}>
        <Image src={Logo} alt='logo' width={80} height={80 * 1.22} onClick={navigate} />
      </div>
      <div className={styles.title}>Impermanent Loss Calculator with APR</div>
    </header>
  )
}

export default Header
