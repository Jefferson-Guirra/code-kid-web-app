import React, { InputHTMLAttributes } from 'react'
import { Props } from '../@types/Input-types'
import styles from '../styles.module.css'


export const InputPassword = ({ styleName,label, className, id, ...rest}: Props) => {
  return (
    <div className={ styles.container }>
      <label htmlFor={ id }>{ label }</label>
      <input id={id} className={`${styles[styleName]} ${className}`} {...rest}/>
    </div>
  )
}
