import { Option } from './Dropdown.d'
import './Dropdown.scss'
import { IFormValues } from '../../pages/manageSuggestion/ManageSuggestion'
import { Path, UseFormRegister } from 'react-hook-form'

type DropdownProps = {
  defaultValue?: string,
  options: Option[],
  label: Path<IFormValues>,
  register?: UseFormRegister<IFormValues>,
  required?: boolean
}

const Dropdown = ({ defaultValue = '', options, label, register, required }: DropdownProps) => {
  return (
    <>
      {
        register && <select className='dropdown_control' defaultValue={defaultValue} id={label} {...register(label, { required })}>
          <option value="" disabled hidden>-- Select --</option>
          {
            options.map((option) => {
              return <option key={option.value} value={option.value}>{option.label}</option>
            })
          }
        </select>
      }
      {
        !register && <select className='dropdown_control' defaultValue={defaultValue} id={label} name={label}>
          <option value="" disabled hidden>-- Select --</option>
          {
            options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      }
    </>
  )
}

export default Dropdown