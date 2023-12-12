import { Option } from './Dropdown.d'
import './Dropdown.scss'
import { IFormValues } from '../../pages/manageSuggestion/ManageSuggestion'
import { Path, UseFormRegister } from 'react-hook-form'

type DropdownProps = {
  options: Option[],
  label: Path<IFormValues>,
  register?: UseFormRegister<IFormValues>,
  required?: boolean
}

const Dropdown = ({ label, register, required, options }: DropdownProps) => {
  return (
    <>
      {
        register && <select className='dropdown_control' id={label} {...register(label, { required })}>
          <option value="" selected disabled hidden>-- Choose a category --</option>
          {
            options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      }
      {
        !register && <select className='dropdown_control' id={label} name={label}>
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