'use client'
import { Props } from '../@types/Input-types'
import styles from '../styles.module.css'
import { Error } from '@/components'


export const InputPassword = ({ 
  styleName,
  label, 
  className, 
  id,
  error,
  setValue, 
  validate, 
  ...rest
}: Props) => {
  return (
    <div className={ styles.container }>
      <label htmlFor={ id }>{ label }</label>
      <input id={id} className={`${styles[styleName]} ${className}`} {...rest}/>
      <Error error={ error }/>
    </div>
  )
}
