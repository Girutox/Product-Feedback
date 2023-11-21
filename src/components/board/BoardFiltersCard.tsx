import { useContext } from 'react'
import CategoryButton from '../elements/CategoryButton'
import { CategoryItem } from './BoardFiltersCard.d'

import './BoardFiltersCard.scss'
import { SuggestionsContext } from '../../store/SuggestionsProvider'

type BoardFiltersCardProps = {
  categories: CategoryItem[]
}

const BoardFiltersCard = ({ categories }: BoardFiltersCardProps) => {
  const { selectedCategoryFilter } = useContext(SuggestionsContext)

  return <div className='board-filters-card_container'>
    <CategoryButton isActive={selectedCategoryFilter === 'all'}>all</CategoryButton>
    {
      categories && categories.map((category) => (
        <CategoryButton
          key={category.categoryName}
          isActive={selectedCategoryFilter === category.categoryName}>
            {category.categoryName}
          </CategoryButton>
      ))
    }
  </div>
}

export default BoardFiltersCard