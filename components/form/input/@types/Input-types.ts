import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  styleName: | 'input-default' | 'input-password',
  label: string
}