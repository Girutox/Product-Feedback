import { useState } from 'react'
import UpIcon from '../../../UI/UpIcon'

import './SuggestionUpVoter.scss'

type Props = {
  upvotes: number
}

const SuggestionUpVoter = ({ upvotes }: Props) => {
  const [isActive, setIsActive] = useState(false)

  const buttonActiveClass = isActive ? 'suggestion-upvoter_button--active' : ''

  return (
    <button
      className={`suggestion-upvoter_button ${buttonActiveClass}`}
      onClick={() => setIsActive(true)}>
      <div className='suggestion-upvoter_icon-container'>
        <UpIcon />
      </div>
      <span>{upvotes}</span>
    </button>
  )
}

export default SuggestionUpVoter