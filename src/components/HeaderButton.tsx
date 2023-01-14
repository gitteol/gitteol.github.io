import styles from './HeaderButton.module.css'
import { Icon } from 'react-feather'

interface Props {
  Icon: Icon;
  text: string;
  url?: string;
}
function HeaderButton({ Icon, text, url }: Props) {
  return (
    <a href={url}>
      <div className={styles.container}>
        <Icon size={24} />
        <span className={styles.text}>
          {text}
        </span>
      </div>
    </a>
  )
}

export default HeaderButton
