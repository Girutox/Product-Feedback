import { ProductRequest } from '../SuggestionsList.d'
import CategoryButton from '../../../elements/CategoryButton'
import SuggestionsCommentCounter from './suggestionCommentCounter'
import SuggestionUpVoter from './SuggestionUpVoter'
import { screenSizes } from '../../../../config'
import useWindowSize from '../../../../hooks/useWindowsSize'

import './SuggestionItem.scss'
import { useNavigate } from 'react-router-dom'

const SuggestionItem = ({ suggestion }: { suggestion: ProductRequest }) => {
  const { width } = useWindowSize()
  const navigate = useNavigate()

  const suggestionItemClickHandler = () => {
    navigate(`/manageFeedBack/${suggestion.id}`)
  }

  const commentDetailsClickHandler = () => {
    navigate(`/feedbackDetail/${suggestion.id}`)
  }

  return (
    <div className='suggestion-item_container' aria-label="Suggestion item">
      {
        width > screenSizes.mobileMaximun &&
        <>
          <SuggestionUpVoter suggestionId={suggestion.id} upvotes={suggestion.upvotes} />
          <div className='suggestion-item_info-container' onClick={suggestionItemClickHandler}>
            <h3>{suggestion.title}</h3>
            <p className='suggestion-item_description'>{suggestion.description}</p>
            <CategoryButton disabled>{suggestion.category}</CategoryButton>
          </div>
          <div>
            <SuggestionsCommentCounter onClick={commentDetailsClickHandler} commentCount={suggestion.comments?.length ?? 0} />
          </div>
        </>
      }
      {
        width <= screenSizes.mobileMaximun &&
        <>
          <div className='suggestion-item_info-container' onClick={suggestionItemClickHandler}>
            <h3>{suggestion.title}</h3>
            <p className='suggestion-item_description'>{suggestion.description}</p>
            <CategoryButton disabled>{suggestion.category}</CategoryButton>
          </div>
          <div className='suggestion-item_comment-container'>
            <SuggestionUpVoter suggestionId={suggestion.id} upvotes={suggestion.upvotes} />
            <SuggestionsCommentCounter onClick={commentDetailsClickHandler} commentCount={suggestion.comments?.length ?? 0} />
          </div>
        </>
      }
    </div>
  )
}

export default SuggestionItem