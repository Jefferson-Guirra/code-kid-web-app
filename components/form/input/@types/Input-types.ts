import { UseFormReturn } from '@/hooks/@types/use-form-type';
import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  styleName: | 'input-default' | 'input-password',
  label: string,
  value: UseFormReturn['value'],
  error: UseFormReturn['error'],
  onBlur: UseFormReturn['onBlur']
  setValue: UseFormReturn['setValue'],
  onChange: UseFormReturn['onChange'],
  validate: UseFormReturn['validate']
}