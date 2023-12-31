import { Path, UseFormRegister } from 'react-hook-form'
import './TextArea.scss'
import { IFormValues } from '../../pages/manageSuggestion/ManageSuggestion'

type TextAreaProps = {
  defaultValue?: string,
  label: Path<IFormValues>,
  register?: UseFormRegister<IFormValues>,
  required?: boolean,
  placeHolder?: string
}

const TextArea = ({ defaultValue = '', label, register, required, placeHolder }: TextAreaProps) => {
  return (
    <>
      {
        register && <textarea className='textarea_control' id={label} defaultValue={defaultValue} {...register(label, { required })} rows={5} placeholder={placeHolder} />
      }
      {
        !register && <textarea className='textarea_control' id={label} defaultValue={defaultValue} name={label} rows={5} placeholder={placeHolder} />
      }
    </>
  )
}

export default TextArea