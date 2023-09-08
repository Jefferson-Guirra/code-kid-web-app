import React, { useState } from 'react'
import { MessageProps, UseFormProps, UseFormReturn, ValidateReturn } from './@types/use-form-type';

const validateValue = ({ type, value }: MessageProps): ValidateReturn => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const validations = {
    email:{ 
      isValid: emailRegex.test(value),
      errorMessage: 'preencha um email válido.',
    },
    password: {   
      isValid: value.length > 8,
      errorMessage: 'senha deve ter no mínimo 8 caracteres.',
    },
    default: {
      isValid: value.length>  0,
      errorMessage: 'campo obrigatório.'
    }
  }
  return type ? validations[type]: validations['default']
}


const message = ({ type, value }: MessageProps) =>{
  if( value.length === 0){
   return 'Campo obrigatório.'
  }
  return validateValue({ type, value}).errorMessage


}
export const useForm = (type : UseFormProps['type']): UseFormReturn => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const validate = (value: string) => {
    const validateReturn = validateValue({type, value})
    if(!validateReturn.isValid) {
      setError(message({ type, value }))
    }
    else{
      setError('')
    }
    return validateReturn.isValid
  }

  const onChange = ({ target }:  React.ChangeEvent<HTMLInputElement>) =>{
    setValue(target.value)
    if(error) validate(target.value)
  }

  const removeError = () => setError('')


  return {
    value, 
    error,
    setValue,
    validate: () => validate(value),
    onChange,
    onBlur: () => validate(value),
    removeError
  }
}