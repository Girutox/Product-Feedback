import './Input.scss'

type InputProps = {
  label: string,
  subtitle?: string,
  type: string,
  id: string,
  name: string
}

const Input = ({ label, subtitle, type, id, name }: InputProps) => {
  return (
    <div className='input_container'>
      <div className='input_title-container'>
        <label htmlFor={id}>{label}</label>
        <span>{subtitle}</span>
      </div>
      <input type={type} id={id} name={name} />
    </div>
  )
}

export default Input