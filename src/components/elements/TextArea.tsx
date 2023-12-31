import { Path, UseFormRegister } from 'react-hook-form'
import './TextArea.scss'
import { IFormValues } from '../../pages/manageSuggestion/ManageSuggestion'

type TextAreaProps = {
  defaultValue?: string,
  label: Path<IFormValues>,
  register?: UseFormRegister<IFormValues>,
  required?: boolean,
  placeHolder?: string,
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ defaultValue = '', label, register, required, placeHolder, onChange }: TextAreaProps) => {
  return (
    <>
      {
        register && <textarea maxLength={250} className='textarea_control' id={label} defaultValue={defaultValue} {...register(label, { required })} rows={5} placeholder={placeHolder} onChange={onChange} />
      }
      {
        !register && <textarea maxLength={250} className='textarea_control' id={label} defaultValue={defaultValue} name={label} rows={5} placeholder={placeHolder} onChange={onChange} />
      }
    </>
  )
}

export default TextArea