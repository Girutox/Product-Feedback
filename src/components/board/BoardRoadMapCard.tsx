import { filterGroupBy } from '../../utils/filterGroupBy'
import { useContext } from 'react'
import { SuggestionsContext, SuggestionsContextType } from '../../store/SuggestionsProvider'
import { Link } from 'react-router-dom'

import './BoardRoadMapCard.scss'
import BoardRoadMapCardStatusItem from './BoardRoadMapCardStatusItem'

const BoardRoadMapCard = () => {
  const { suggestions } = useContext(SuggestionsContext) as SuggestionsContextType

  const groups = filterGroupBy(suggestions)

  return <div className='board-roadmap-card_container'>
    <div className='board-roadmap-card_heading'>
      <h3>Roadmap</h3>
      <Link to={'/roadmap'}>View</Link>
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