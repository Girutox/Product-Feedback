import './FormControl.scss'

type FormControlProps = {
  label: string,
  subtitle?: string,
  id: string,
  children: React.ReactNode
}

const FormControl = ({ label, subtitle, id, children }: FormControlProps) => {
  return (
    <div className='form-control_container'>
      <div className='form-control_title-container'>
        <label htmlFor={id}>{label}</label>
        {subtitle && <span>{subtitle}</span>}
      </div>
      {children}
    </div>
  )
}

export default FormControl