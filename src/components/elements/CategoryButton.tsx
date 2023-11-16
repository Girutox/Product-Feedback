import { useState } from 'react'

import './CategoryButton.scss'

type CategoryButtonProps = {
  isActive?: boolean,
  children: string,
  disabled?: boolean
}

const CategoryButton = ({ children, isActive, disabled = false }: CategoryButtonProps) => {
  const [active, setActive] = useState(isActive)

  const buttonActiveClass = active ? 'category-button--active' : ''
  const buttonDisabledClass = disabled ? 'category-button--disabled' : ''
  const buttonText = children.length ? `${children[0].toUpperCase()}${children.substring(1)}` : children

  const clickHandler = () => {
    setActive(true)
  }

  return (
    <button
      className={`category-button ${buttonActiveClass} ${buttonDisabledClass}`}
      onClick={clickHandler}>
      {buttonText}
    </button>
  )
}

export default CategoryButton