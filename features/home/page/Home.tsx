import styles from './styles.module.css'
import { Form } from '@/components'
export const Home = () => {
  return (
    <section className={ styles.container}>
      <h2>Login</h2>
      <Form.Root>
        <Form.InputText type='text' styleName='input-default' id='email' name='email' label='Email'/>
        <Form.InputPassword type='password' styleName='input-default' id='password' name='password' label='Senha'/>
        <Form.ButtonSubmit text='ENTRAR' styleName='btn-submit'/>
      </Form.Root>

    </section>
  )
}