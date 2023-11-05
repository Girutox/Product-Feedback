import { useState, useEffect } from 'react'
import { FeedbackResponse, ProductRequest } from './suggestionsList/SuggestionsList.d'

import SuggestionsToolbar from './SuggestionsToolbar'
import SuggestionsList from './suggestionsList/SuggestionsList'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<ProductRequest[]>([])

  useEffect(() => {
    fetch('https://frontendmentor.com/getFeedback', { method: 'GET' })
      .then(response => response.json())
      .then((data: FeedbackResponse) => setSuggestions(data.productRequests))
  }, [])

  return (
    <>
      <SuggestionsToolbar />
      <section aria-label="Suggestions main content">
        <SuggestionsList data={suggestions} />
      </section>
    </>
  )
}

export default Suggestions