import logo from '../../../assets/img/timer-logo5.png'
import smallLogo from '../../../assets/img/small-logo.png'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} className={styles.defaultLogo} alt="logo" />
      <img src={smallLogo} className={styles.smallLogo} alt="logo" />
    </div>
  )
}

export { Logo }
