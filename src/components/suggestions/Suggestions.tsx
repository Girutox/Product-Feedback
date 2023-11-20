import { useEffect, useContext } from 'react'
import { FeedbackResponse, ProductRequest } from './suggestionsList/SuggestionsList.d'
import SuggestionsToolbar from './SuggestionsToolbar'
import SuggestionsList from './suggestionsList/SuggestionsList'

import './Suggestions.scss'
import { SuggestionsContext } from '../../store/SuggestionsProvider'

const Suggestions = () => {
  const { suggestions, refreshSuggestions } = useContext(SuggestionsContext)

  useEffect(() => {
    const getFeedback = async () => {
      const response = await fetch('https://frontendmentor.com/getFeedback', { method: 'GET' })
      const data = await response.json() as FeedbackResponse
      refreshSuggestions(data.productRequests as ProductRequest[])
      // refreshSuggestions([] as ProductRequest[])
    }

    getFeedback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <SuggestionsToolbar />
      <section className='suggestions_data-container' aria-label="Suggestions main content">
        <SuggestionsList data={suggestions} />
      </section>
    </>
  )
}

export default Suggestions