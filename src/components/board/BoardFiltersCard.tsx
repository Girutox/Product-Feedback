import DefaultCard from '../UI/DefaultCard'
import CategoryButton from '../elements/CategoryButton'

import './BoardFiltersCard.scss'

const BoardFiltersCard = () => {
  return <DefaultCard>
    <div className='board-filters-card_container'>
      <CategoryButton text='All' isActive />
      <CategoryButton text='UI' />
      <CategoryButton text='UX' />
      <CategoryButton text='Enhancement' />
      <CategoryButton text='Bug' />
      <CategoryButton text='Feature' />
    </div>
  </DefaultCard>
}

export default BoardFiltersCard