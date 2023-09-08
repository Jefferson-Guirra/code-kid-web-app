import styles from '../styles.module.css'
import { Props } from '../@types/Input-types'

export const InputText = ({ styleName, className, label, id, ...rest}: Props) => {
  return (
    <div className={ styles.container }>
      <label htmlFor={ id }>{label}</label>
      <input id={ id } className={`${styles[styleName]} ${className}`} {...rest}/>
    </div>
    
  )
}
