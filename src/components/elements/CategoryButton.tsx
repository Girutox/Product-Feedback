import { useState } from 'react'

import './CategoryButton.scss'

const CategoryButton = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false)

  const buttonActiveClass = isActive ? 'category-button--active' : ''

  return <button className={`category-button ${buttonActiveClass}`} onClick={() => setIsActive(!isActive)}>
    {children}
  </button>
}

export default CategoryButton