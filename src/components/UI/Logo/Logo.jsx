import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={require('../../../assets/img/timer-logo5.png')} alt="logo" />
    </div>
  )
}

export { Logo }