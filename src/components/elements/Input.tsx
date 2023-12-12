import { Path, UseFormRegister } from 'react-hook-form'
import { IFormValues } from '../../pages/manageSuggestion/ManageSuggestion'
import './Input.scss'

type InputProps = {
  type: string,
  label: Path<IFormValues>,
  register?: UseFormRegister<IFormValues>,
  required?: boolean
}

const Input = ({ type, label, register, required }: InputProps) => {
  return (
    <>
    {
      register && <input className='input_control' type={type} id={label} {...register(label, { required })} />
    }
    {
      !register && <input className='input_control' type={type} id={label} name={label} />
    }
    </>
  )
}

export default Input