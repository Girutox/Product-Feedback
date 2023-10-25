import DefaultCard from '../UI/DefaultCard'
import CategoryButton from '../elements/CategoryButton'

const BoardFiltersCard = () => {
  return <DefaultCard>
    <CategoryButton text='All' />
    <CategoryButton text='UI' />
    <CategoryButton text='UX' />
    <CategoryButton text='Enhancement' />
    <CategoryButton text='Bug' />
    <CategoryButton text='Feature' />
  </DefaultCard>
}

export default BoardFiltersCard