'use client'
import styles from '../styles.module.css'
import { Props } from '../@types/Input-types'
import { Error } from '@/components'

export const InputText = ({ 
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
      <label htmlFor={ id }>{label}</label>
      <input id={ id } className={`${styles[styleName]} ${className}`} {...rest}/>
      <Error error={ error } />
    </div>
    
  )
}
