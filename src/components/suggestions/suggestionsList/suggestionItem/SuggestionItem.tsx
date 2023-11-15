import { ProductRequest } from '../SuggestionsList.d'
import CategoryButton from '../../../elements/CategoryButton'


import './SuggestionItem.scss'
import SuggestionsCommentCounter from './suggestionCommentCounter'
import SuggestionUpVoter from './SuggestionUpVoter'

const SuggestionItem = (suggestion: ProductRequest) => {
  return (
      <div className='suggestion-item_container' aria-label="Suggestion item">
        <SuggestionUpVoter upvotes={suggestion.upvotes} />
        <div className='suggestion-item_info-container'>
          <h3>{suggestion.title}</h3>
          <p className='suggestion-item_description'>{suggestion.description}</p>
          <CategoryButton>{suggestion.category}</CategoryButton>
        </div>
        <div>
          <SuggestionsCommentCounter commentCount={suggestion.comments?.length ?? 0} />
        </div>
      </div>
  )
}

export default SuggestionItem