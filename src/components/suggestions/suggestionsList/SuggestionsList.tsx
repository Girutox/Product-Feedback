import SuggestionItem from './suggestionItem/SuggestionItem'
import { ProductRequest } from './SuggestionsList.d'

import './SuggestionsList.scss'

type SuggestionsListProps = {
  data: ProductRequest[]
}

const SuggestionsList = ({ data }: SuggestionsListProps) => {
  return (
    <div className='suggestions-list_container'>
      {data.length > 0 && data.map((suggestion: ProductRequest) => (
        <SuggestionItem key={suggestion.id} {...suggestion} />
      ))
      }
      {!data.length && <h2>No suggestions found</h2>}
    </div>
  )
}

export default SuggestionsList