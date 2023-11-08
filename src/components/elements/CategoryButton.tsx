import { useState } from 'react'

import './CategoryButton.scss'

type CategoryButtonProps = {
  isActive?: boolean,
  children: string,
}

const CategoryButton = ({ children, isActive }: CategoryButtonProps) => {
  const [active, setActive] = useState(isActive)

  const buttonClasses = active ? 'category-button--active' : ''
  const buttonText = children.length ? `${children[0].toUpperCase()}${children.substring(1)}` : children

  const clickHandler = () => {
    setActive(true)
  }

  return (
    <button
      className={`category-button ${buttonClasses}`}
      onClick={clickHandler}>
      {buttonText}
    </button>
  )
}

export default CategoryButton