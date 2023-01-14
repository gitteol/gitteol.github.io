import { AlertTriangle, Icon, Package } from 'react-feather'
import styles from './Feature.module.css'

interface Props {
  Icon: Icon;
  title: string;
  desc: string;
}
function Feature({Icon, title, desc}: Props) {
  return (
    <div className={styles.container}>
      <Icon size={30} />
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.desc}>
        {desc}
      </div>
    </div>
  )
}

export default Feature
