import StatusCounter from '../elements/StatusCounter'
import { CIRCLE_BACKGROUND_VARIANTS } from '../../models/statusCounter'

import './BoardRoadMapCard.scss'

const BoardRoadMapCard = () => {
  return <div className='board-roadmap-card_container'>
    <div className='board-roadmap-card_heading'>
      <h3>Roadmap</h3>
      <a href="">View</a>
    </div>
    <div className='board-roadmap-card_items'>
      <StatusCounter status={CIRCLE_BACKGROUND_VARIANTS.PLANNED} count={2} />
      <StatusCounter status={CIRCLE_BACKGROUND_VARIANTS.INPROGRESS} count={3} />
      <StatusCounter status={CIRCLE_BACKGROUND_VARIANTS.LIVE} count={1} />
    </div>
  </div>
}

export default BoardRoadMapCard