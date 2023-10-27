import { CIRCLE_BACKGROUND_VARIANTS } from '../../models/statusCounter'
import './StatusCounter.scss'

const circleBackgroundVariants = {
  [CIRCLE_BACKGROUND_VARIANTS.PLANNED]: 'bg-marker',
  [CIRCLE_BACKGROUND_VARIANTS.INPROGRESS]: 'bg-primary',
  [CIRCLE_BACKGROUND_VARIANTS.LIVE]: 'bg-marker-light'
}

type StatusCounterProps = {
  status: CIRCLE_BACKGROUND_VARIANTS,
  count: number
}

const StatusCounter = ({ status, count }: StatusCounterProps) => {
  const circleBackgroundVariant = circleBackgroundVariants[status]

  return <div className="status-counter_container">
    <div className='status-counter_list-item'>
      <div className={`status-counter_list-item_circle ${circleBackgroundVariant}`} />
      <span className='status-counter_list-item_text'>{status}</span>      
    </div>
    <span className='status-counter_number'>{count}</span>
  </div>
}

export default StatusCounter