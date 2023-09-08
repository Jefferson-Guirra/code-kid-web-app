export interface UseFormProps {
  type?: | 'password' | 'email' | 'default',
}

export interface MessageProps {
  type: UseFormProps['type'],
  value: string
}

export interface ValidateReturn {
  isValid: boolean,
  errorMessage: string,
}

export interface UseFormReturn {
  value: string;
  error: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  validate: () => boolean;
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => boolean;
  removeError: () => void
}