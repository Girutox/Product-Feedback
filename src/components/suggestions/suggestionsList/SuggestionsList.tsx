import { ProductRequest } from './SuggestionsList.d'

type SuggestionsListProps = {
  data: ProductRequest[]
}

const SuggestionsList = ({ data }: SuggestionsListProps) => {
  return (
    <div>
      {data.length > 0 && data.map((suggestion: ProductRequest) => (
        <div key={suggestion.id} aria-label="Suggestion item">
          <h2>{suggestion.title}</h2>
          <h3>{suggestion.description}</h3>
        </div>
      ))
      }
      {!data.length && <h2>No suggestions found</h2>}
    </div>
  )
}

export default SuggestionsList