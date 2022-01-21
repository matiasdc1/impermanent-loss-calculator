import Footer from './Footer'
import Header from './Header'
import styles from '../../styles/Layout.module.css'

interface LayoutType {
  children: JSX.Element[] | JSX.Element
}

const Layout: React.FC<LayoutType> = props => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.body}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
