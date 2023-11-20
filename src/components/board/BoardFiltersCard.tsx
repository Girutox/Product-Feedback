import CategoryButton from '../elements/CategoryButton'

const BoardFiltersCard = () => {
  return (
    <div className='home_filter-card'>
      <CategoryButton>All</CategoryButton>
      <CategoryButton>UI</CategoryButton>
      <CategoryButton>UX</CategoryButton>
      <CategoryButton>Enhancement</CategoryButton>
      <CategoryButton>Bug</CategoryButton>
      <CategoryButton>Feature</CategoryButton>
    </div>
  )
}

export default BoardFiltersCard