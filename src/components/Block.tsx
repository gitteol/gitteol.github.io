import { ReactNode } from 'react'
import { AlertTriangle } from 'react-feather'
import styles from './Block.module.css'

interface Props {
  children: ReactNode;
}
function Block({ children }: Props) {
  return (
    <div className={styles.block}>
      <AlertTriangle />
      <div className={styles.blockText}>
        {children}
      </div>
    </div>
  )
}

export default Block
