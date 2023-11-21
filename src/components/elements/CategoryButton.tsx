import { useContext } from 'react'

import './CategoryButton.scss'
import { capitalizeFirstLetter } from '../../utils/global'
import { SuggestionsContext } from '../../store/SuggestionsProvider'

type CategoryButtonProps = {
  isActive?: boolean,
  children: string,
  disabled?: boolean
}

const CategoryButton = ({ children, isActive, disabled = false }: CategoryButtonProps) => {
  const { changeActiveCategoryFilter } = useContext(SuggestionsContext)

  const buttonActiveClass = isActive ? 'category-button--active' : ''
  const buttonDisabledClass = disabled ? 'category-button--disabled' : ''
  const buttonText = capitalizeFirstLetter(children)

  const clickHandler = () => {
    changeActiveCategoryFilter(children)
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