import './Button.scss'

export enum ButtonType {
  ADD = 'button--add',
  CANCEL = 'button--cancel'
}

type ButtonProps = {
  type?: ButtonType,
  children: React.ReactNode,
  onClick?: () => void
}

const Button = ({ children, type, onClick }: ButtonProps) => {
  const buttonModifier = type ? `button ${type}` : ButtonType.ADD

  return <button className={`button ${buttonModifier}`} onClick={onClick}>
    {children}
  </button>
}

export default Button