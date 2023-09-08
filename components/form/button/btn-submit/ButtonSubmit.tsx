import { ButtonHTMLAttributes } from 'react'
import styles from '../styles.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleName: | 'btn-submit',
  text: string
}
export const ButtonSubmit = ({styleName, text, className, ...rest}: Props) => {
  return (
    <button className={`${styles[styleName]} ${className}`} {...rest}>{ text }</button>
  )
}