import { useState } from 'react'

import './CategoryButton.scss'

type CategoryButtonProps = {
  text: string,
  isActive?: boolean
}

const CategoryButton = ({ text, isActive }: CategoryButtonProps) => {
  const [active, setActive] = useState(isActive)

  const buttonClasses = active ? 'category-button--active' : ''

  const clickHandler = () => {
    setActive(true)
  }

  return (
    <button
      className={`category-button ${buttonClasses}`}
      onClick={clickHandler}>
      {text}
    </button>
  )
}

export default CategoryButton