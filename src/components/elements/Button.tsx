import './Button.scss'

type ButtonProps = {
  children: React.ReactNode
}

const Button = ({children}: ButtonProps) => {
  return <button className='button button-primary'>
    {children}
  </button>
}

export default Button