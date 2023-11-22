import { useEffect, useContext } from 'react'
import { FeedbackResponse, ProductRequest } from './suggestionsList/SuggestionsList.d'
import SuggestionsToolbar from './SuggestionsToolbar'
import SuggestionsList from './suggestionsList/SuggestionsList'

import './Suggestions.scss'
import { SuggestionsContext } from '../../store/SuggestionsProvider'

const Suggestions = () => {
  const { suggestions, selectedCategoryFilter, suggestionsCount, refreshSuggestions, changeSuggestionsCount } = useContext(SuggestionsContext)

  console.log(suggestionsCount)

  useEffect(() => {
    const getFeedback = async () => {
      const response = await fetch('https://frontendmentor.com/getFeedback', { method: 'GET' })
      const data = await response.json() as FeedbackResponse
      refreshSuggestions(data.productRequests as ProductRequest[])
    }

    getFeedback()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (selectedCategoryFilter === 'all') {
      changeSuggestionsCount(suggestions.length)
      return
    }
    changeSuggestionsCount(suggestions.filter(item => item.category === selectedCategoryFilter).length)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategoryFilter, suggestions])

  return (
    <>
      <SuggestionsToolbar suggestionsCount={suggestionsCount} />
      <section className='suggestions_data-container' aria-label="Suggestions main content">
        <SuggestionsList data={suggestions} selectedCategoryFilter={selectedCategoryFilter} />
      </section>
    </>
  )
}

export default Suggestions