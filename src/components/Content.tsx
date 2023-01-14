import { Image, Package, Smartphone } from 'react-feather'
import Block from './Block'
import styles from './Content.module.css'
import Feature from './Feature'

function Content() {
  return (
    <div className={styles.container}>
      깃털은 <a href='https://www.rust-lang.org/'>Rust 프로그래밍 언어</a>와&nbsp;
      <a href='https://bevyengine.org/'>Bevy 게임 엔진</a>으로 작성된 오픈소스&nbsp;
      <a href='https://playentry.org/'>엔트리</a> 구현체입니다. 

      <Block>
        깃털은 아직 매우 초기 단계의 프로젝트로 계속해서 개발 중입니다.
      </Block>

      <h2 className={styles.title}>
        목표
      </h2>
      <div className={styles.features}>
        <Feature
          Icon={Package}
          title='하나의 실행 파일로'
          desc='엔트리 프로젝트를 .exe 등 하나의 실행파일로 내보내요.'
        />
        <Feature
          Icon={Image}
          title='해상도와 실행 속도'
          desc='엔트리 공식 구현체보다 더 나은 해상도로, 더 빠르게 작품을 실행해요.'
        />
        <Feature
          Icon={Smartphone}
          title='다양한 플랫폼'
          desc='Windows, MacOS, Linux, Web 등 다양한 플랫폼에서 실행해요.'
        />
      </div>
    </div>
  )
}

export default Content
