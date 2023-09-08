'use client'
import { useForm } from '@/hooks/useForm'
import styles from './styles.module.css'
import { Form } from '@/components'
import React from 'react'
export const Home = () => {
  const email = useForm('email')
  const password = useForm('password')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validate = email.validate() && password.validate()
    if(validate) {
      alert('login válido.')
    }
    else {
      alert('login inválido.')
    }

  }
  return (
    <section className={ styles.container}>
      <h2>Login</h2>
      <Form.Root>
        <Form.InputText 
        type='text' 
        styleName='input-default' 
        id='email' 
        name='email' 
        label='Email'
        {...email}
        />
        <Form.InputPassword 
        type='password' 
        styleName='input-default' 
        id='password' 
        name='password' 
        label='Senha'
        {...password}
        />
        <Form.ButtonSubmit text='ENTRAR' styleName='btn-submit' type='submit'/>
      </Form.Root>

    </section>
  )
}