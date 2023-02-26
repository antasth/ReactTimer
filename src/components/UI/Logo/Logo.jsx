import logo from '../../../assets/img/timer-logo5.png'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
  )
}

export { Logo }
