import { filterGroupBy } from '../../utils/filterGroupBy'
import { useContext } from 'react'
import { SuggestionsContext, SuggestionsContextType } from '../../store/SuggestionsProvider'

import './BoardRoadMapCard.scss'
import BoardRoadMapCardStatusItem from './BoardRoadMapCardStatusItem'

const BoardRoadMapCard = () => {
  const { suggestions } = useContext(SuggestionsContext) as SuggestionsContextType

  const groups = filterGroupBy(suggestions)

  console.log(groups)
  

  return <div className='board-roadmap-card_container'>
    <div className='board-roadmap-card_heading'>
      <h3>Roadmap</h3>
      <a href="">View</a>
    </div>
    {
      groups.length > 0 && <BoardRoadMapCardStatusItem groups={groups} />
    }
    {
      groups.length === 0 && <p>No data found</p>
    }
  </div>
}

export default BoardRoadMapCard