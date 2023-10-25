import './CategoryButton.scss'

type CategoryButtonProps = {
  text: string,
  isActive?: boolean
}

const CategoryButton = ({ text, isActive }: CategoryButtonProps) => {
  const buttonClasses = isActive ? 'category-button--active' : ''

  return <button className={`category-button ${buttonClasses}`}>
    {text}
  </button>
}

export default CategoryButton