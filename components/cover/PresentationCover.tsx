import Image from 'next/image'
import styles from './styles.module.css'

interface Props {
  src: string
}

export const PresentationCover = ({ src }: Props) => {
  return (
    <section className={ styles.container}>
      <Image 
      priority
      src= { src }
      alt='codigo-kid apresentação imagem'
      width={800}
      height={0}
      style={{ width: '100%', height: '100%'}}
      />
    </section>
  )
}
