import styles from '../../styles/Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} ${styles.slide_in_left}`}>
      <h2>Donations</h2>
      <span>Bitcoin: 1PBVk3Eiz1QBhTvmvx2D1tNbgefKDErrdQ </span>
      <span>
        Ethereum, BSC, Fantom, Avalanche: 0xeD1Ca75198A04a1F76c758f1D552efDD0736aa54
      </span>
      <span>Solana: 5CviNHuDf4wsYKDM6szPUsLdzQDK57AmA5dPP2NwS2Hx</span>
      <br />
      <span>
        Developed by Matias Diez-Canseco. For business inquiries contact me:
        matiasdiezcanseco@gmail.com
      </span>
    </footer>
  )
}

export default Footer
