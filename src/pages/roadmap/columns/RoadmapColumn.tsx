import { useContext } from 'react'
import { capitalizeFirstLetter } from '../../../utils/global'
import './RoadmapColumn.scss'
import { SuggestionsContext, SuggestionsContextType } from '../../../store/SuggestionsProvider'
import RoadmapCardItem from './card/RoadmapCardItem'

type RoadmapColumnProps = {
  statusName: string,
  statusDescription: string
}

const RoadmapColumn = ({ statusName, statusDescription }: RoadmapColumnProps) => {
  const { suggestions } = useContext(SuggestionsContext) as SuggestionsContextType

  const suggestionsByStatus = suggestions.filter(suggestion => suggestion.status === statusName)

  return <section className='roadmap-column_container'>
    <div className='roadmap-column_title-container'>
      <h3>{capitalizeFirstLetter(statusName)} ({suggestionsByStatus.length})</h3>
      <span>{statusDescription}</span>
    </div>
    <div className='roadmap-column_cards-container'>
      {
        suggestionsByStatus.map((suggestion, index) => (
          <RoadmapCardItem
            key={index}
            suggestion={suggestion} />
        ))
      }
    </div>
  </section>
}

export default RoadmapColumn