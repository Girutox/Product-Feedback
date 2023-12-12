import './Button.scss'

export enum ButtonActionType {
  ADD = 'button--add',
  CANCEL = 'button--cancel',
  DELETE = 'button--delete'
}

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset',
  actionType?: ButtonActionType,
  children: React.ReactNode,
  onClick?: () => void
}

const Button = ({ children, type = 'button', actionType, onClick }: ButtonProps) => {
  const buttonModifier = actionType ? actionType : ButtonActionType.ADD

  return <button className={`button ${buttonModifier}`} type={type} onClick={onClick}>
    {children}
  </button>
}

export default Button