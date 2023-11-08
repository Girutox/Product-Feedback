import DefaultCard from '../UI/DefaultCard'
import CategoryButton from '../elements/CategoryButton'

import './BoardFiltersCard.scss'

const BoardFiltersCard = () => {
  return <DefaultCard>
    <div className='board-filters-card_container'>
      <CategoryButton isActive>All</CategoryButton>
      <CategoryButton>UI</CategoryButton>
      <CategoryButton>UX</CategoryButton>
      <CategoryButton>Enhancement</CategoryButton>
      <CategoryButton>Bug</CategoryButton>
      <CategoryButton>Feature</CategoryButton>
    </div>
  </DefaultCard>
}

export default BoardFiltersCard