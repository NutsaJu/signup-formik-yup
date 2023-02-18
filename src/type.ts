export type User = {
  name: string
  email: string
  password: string
  confirmPassword: string
  position: string
}

export type MuiFieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean
}