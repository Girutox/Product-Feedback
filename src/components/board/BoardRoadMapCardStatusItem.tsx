import { FilterGroupBy } from '../../utils/filterGroupBy'
import StatusCounter from '../elements/StatusCounter'

type BoardRoadMapCardStatusItemProps = {
  groups: FilterGroupBy[]
}

const BoardRoadMapCardStatusItem = ({ groups }: BoardRoadMapCardStatusItemProps) => {
  return (
    <div className='board-roadmap-card_items'>
      {
        groups.map((group, index) => {
          return <StatusCounter key={index} status={group.status} count={group.count} />
        })
      }
    </div>
  )
}

export default BoardRoadMapCardStatusItem