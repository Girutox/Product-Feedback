import { CIRCLE_BACKGROUND_VARIANTS } from '../../models/statusCounter'
import { capitalizeFirstLetter } from '../../utils/global'
import './StatusCounter.scss'

const circleBackgroundVariants = {
  [CIRCLE_BACKGROUND_VARIANTS.suggestion]: 'bg-info',
  [CIRCLE_BACKGROUND_VARIANTS.planned]: 'bg-marker',
  [CIRCLE_BACKGROUND_VARIANTS['in-progress']]: 'bg-primary',
  [CIRCLE_BACKGROUND_VARIANTS.live]: 'bg-marker-light'
}

type StatusCounterProps = {
  status: string,
  count: number
}

const StatusCounter = ({ status, count }: StatusCounterProps) => {
  // @ts-ignore
  const circleBackgroundVariant = circleBackgroundVariants[status] ? circleBackgroundVariants[status] : 'bg-secondary'

  return <div className="status-counter_container">
    <div className='status-counter_list-item'>
      <div className={`status-counter_list-item_circle ${circleBackgroundVariant}`} />
      <span className='status-counter_list-item_text'>{capitalizeFirstLetter(status)}</span>
    </div>
    <span className='status-counter_number'>{count}</span>
  </div>
}

export default StatusCounter