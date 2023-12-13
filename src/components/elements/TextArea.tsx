import { Path, UseFormRegister } from 'react-hook-form'
import './TextArea.scss'
import { IFormValues } from '../../pages/manageSuggestion/ManageSuggestion'

type TextAreaProps = {
  defaultValue?: string,
  label: Path<IFormValues>,
  register?: UseFormRegister<IFormValues>,
  required?: boolean
}

const TextArea = ({ defaultValue = '', label, register, required }: TextAreaProps) => {
  return (
    <>
      {
        register && <textarea className='textarea_control' id={label} defaultValue={defaultValue} {...register(label, { required })} rows={5} />
      }
      {
        !register && <textarea className='textarea_control' id={label} defaultValue={defaultValue} name={label} rows={5} />
      }
    </>
  )
}

export default TextArea