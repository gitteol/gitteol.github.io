import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.subtitle}>Rust로 작성된<br/>오픈소스 <span className={styles.entry}>엔트리</span> 구현체</div>
      <h1 className={styles.title}>깃털</h1>
    </header>
  )
}

export default Header
