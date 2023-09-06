
import styles from './styles.module.css'
import { Home } from '../page/Home'
import { PresentationCover } from '@/components'
export const HomeContainer = () => {
  return (
    <main className={ styles.container}>
      <PresentationCover src='/images/codigo-kid-presentation.jpg'/>
       <Home/>
    </main>
  )
}