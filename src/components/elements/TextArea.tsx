import { Path, UseFormRegister } from 'react-hook-form'
import './TextArea.scss'
import { IFormValues } from '../../pages/manageSuggestion/ManageSuggestion'

type TextAreaProps = {
  label: Path<IFormValues>,
  register?: UseFormRegister<IFormValues>,
  required?: boolean
}

const TextArea = ({ label, register, required }: TextAreaProps) => {
  return (
    <>
      {
        register && <textarea className='textarea_control' id={label} {...register(label, { required })} rows={5} />
      }
      {
        !register && <textarea className='textarea_control' id={label} name={label} rows={5} />
      }
    </>
  )
}

export default TextArea