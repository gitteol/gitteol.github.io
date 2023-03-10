import styles from './App.module.css';
import Content from './components/Content';
import Header from './components/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content />
    </div>
  )
}

export default App
