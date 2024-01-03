import { useContext, useState } from 'react'
import UpIcon from '../../../UI/UpIcon'

import './SuggestionUpVoter.scss'
import { SuggestionsContext, SuggestionsContextType } from '../../../../store/SuggestionsProvider'

type Props = {
  suggestionId: number,
  upvotes: number,
  horizontalLayout?: boolean
}

const SuggestionUpVoter = ({ suggestionId, upvotes, horizontalLayout = false }: Props) => {
  const [isActive, setIsActive] = useState(false)
  const [upvoteCount, setUpvoteCount] = useState(upvotes)

  const { changeVoteCount } = useContext(SuggestionsContext) as SuggestionsContextType

  const clickHandler = () => {
    let newValue = 0

    if (isActive) {
      newValue = upvoteCount - 1
    } else {
      newValue = upvoteCount + 1
    }

    setUpvoteCount(newValue)
    changeVoteCount(suggestionId, newValue)
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