import { Book, FileText, GitHub } from 'react-feather'
import styles from './Header.module.css'
import HeaderButton from './HeaderButton'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.subtitle}>Rust로 작성된<br/>오픈소스 <span className={styles.entry}>엔트리</span> 구현체</div>
      <h1 className={styles.title}>깃털</h1>
      <div className={styles.btns}>
        <HeaderButton Icon={GitHub} text="소스 코드" url='https://github.com/gitteol/gitteol' />
        <HeaderButton Icon={Book} text="문서" url='/book' />
        <HeaderButton Icon={FileText} text="API 문서" />
      </div>
    </header>
  )
}

export default Header
