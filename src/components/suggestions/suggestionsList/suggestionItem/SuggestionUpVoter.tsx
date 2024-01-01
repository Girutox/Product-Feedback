import { useState } from 'react'
import UpIcon from '../../../UI/UpIcon'

import './SuggestionUpVoter.scss'

type Props = {
  upvotes: number,
  horizontalLayout?: boolean
}

const SuggestionUpVoter = ({ upvotes, horizontalLayout = false }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [upvoteCount, setUpvoteCount] = useState(upvotes)

  const clickHandler = () => {
    if (isActive) {
      setUpvoteCount(upvoteCount - 1)
    } else {
      setUpvoteCount(upvoteCount + 1)
    }

    setIsActive(!isActive)
  }

  const buttonActiveClass = isActive ? 'suggestion-upvoter_button--active' : ''
  const layoutModifierClass = horizontalLayout ? 'suggestion-upvoter_button--horizontal' : ''

  return (
    <button
      className={`suggestion-upvoter_button ${buttonActiveClass} ${layoutModifierClass}`}
      onClick={clickHandler}>
      <div className='suggestion-upvoter_icon-container'>
        <UpIcon />
      </div>
      <span>{upvoteCount}</span>
    </button>
  )
}

export default SuggestionUpVoter