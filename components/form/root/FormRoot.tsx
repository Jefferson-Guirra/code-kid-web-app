
import { ReactNode } from 'react'
import styles from './styles.module.css' 

interface Props {
  children: ReactNode
}
export const FormRoot = ({ children }: Props) => {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}