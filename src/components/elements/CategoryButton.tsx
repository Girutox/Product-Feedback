import './CategoryButton.scss'

type CategoryButtonProps = {
  text: string
}

const CategoryButton = ({ text }: CategoryButtonProps) => {
  return <button className='category-button'>
    {text}
  </button>
}

export default CategoryButton