import styles from './Header.module.css'

import ubiiLogo from '../assets/logo-ubii.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ubiiLogo} alt="Logotipo do Ubii" />
    </header>
  );
}