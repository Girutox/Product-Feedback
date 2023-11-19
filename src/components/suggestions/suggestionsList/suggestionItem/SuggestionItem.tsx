import { ProductRequest } from '../SuggestionsList.d'
import CategoryButton from '../../../elements/CategoryButton'
import SuggestionsCommentCounter from './SuggestionCommentCounter'
import SuggestionUpVoter from './SuggestionUpVoter'
import { screenSizes } from '../../../../config'
import useWindowSize from '../../../../hooks/useWindowsSize'

import './SuggestionItem.scss'

const SuggestionItem = (suggestion: ProductRequest) => {
  const { width } = useWindowSize()

  return (
    <div className='suggestion-item_container' aria-label="Suggestion item">
      {
        width > screenSizes.mobileMaximun &&
        <>
          <SuggestionUpVoter upvotes={suggestion.upvotes} />
          <div className='suggestion-item_info-container'>
            <h3>{suggestion.title}</h3>
            <p className='suggestion-item_description'>{suggestion.description}</p>
            <CategoryButton disabled>{suggestion.category}</CategoryButton>
          </div>
          <div>
            <SuggestionsCommentCounter commentCount={suggestion.comments?.length ?? 0} />
          </div>
        </>
      }
      {
        width <= screenSizes.mobileMaximun &&
        <>
          <div className='suggestion-item_info-container'>
            <h3>{suggestion.title}</h3>
            <p className='suggestion-item_description'>{suggestion.description}</p>
            <CategoryButton disabled>{suggestion.category}</CategoryButton>
          </div>
          <div className='suggestion-item_comment-container'>
            <SuggestionUpVoter upvotes={suggestion.upvotes} />
            <SuggestionsCommentCounter commentCount={suggestion.comments?.length ?? 0} />
          </div>
        </>
      }
    </div>
  )
}

export default SuggestionItem