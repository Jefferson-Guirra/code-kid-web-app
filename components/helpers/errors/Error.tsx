import styles from './styles.module.css'
interface Props {
  error: string
}

export const Error = ({ error }: Props) => {
  return (
    <p className={ styles.error }>{ error }</p>
  )
}