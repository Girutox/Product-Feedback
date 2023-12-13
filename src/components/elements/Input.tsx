import { Path, UseFormRegister } from 'react-hook-form'
import { IFormValues } from '../../pages/manageSuggestion/ManageSuggestion'
import './Input.scss'

type InputProps = {
  type: string,
  defaultValue?: string,
  label: Path<IFormValues>,
  register?: UseFormRegister<IFormValues>,
  required?: boolean
}

const Input = ({ type, defaultValue = '', label, register, required }: InputProps) => {
  return (
    <>
    {
      register && <input className='input_control' type={type} defaultValue={defaultValue} id={label} {...register(label, { required })} />
    }
    {
      !register && <input className='input_control' type={type} defaultValue={defaultValue} id={label} name={label} />
    }
    </>
  )
}

export default Input