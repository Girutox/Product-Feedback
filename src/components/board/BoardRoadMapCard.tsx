import { filterGroupBy } from '../../utils/filterGroupBy'
import { useContext } from 'react'
import { SuggestionsContext } from '../../store/SuggestionsProvider'

import './BoardRoadMapCard.scss'
import BoardRoadMapCardStatusItem from './BoardRoadMapCardStatusItem'

const BoardRoadMapCard = () => {
  const {suggestions} = useContext(SuggestionsContext)

  const groups = filterGroupBy(suggestions)

  return <div className='board-roadmap-card_container'>
    <div className='board-roadmap-card_heading'>
      <h3>Roadmap</h3>
      <a href="">View</a>
    </div>
    <BoardRoadMapCardStatusItem groups={groups} />
  </div>
}

export default BoardRoadMapCard