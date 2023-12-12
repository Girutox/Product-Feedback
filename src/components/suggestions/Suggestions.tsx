import { useEffect, useContext, useState } from 'react'
import { FeedbackResponse, ProductRequest, SortByItem } from './suggestionsList/SuggestionsList.d'
import SuggestionsToolbar from './SuggestionsToolbar'
import SuggestionsList from './suggestionsList/SuggestionsList'
import { SuggestionsContext, SuggestionsContextType } from '../../store/SuggestionsProvider'

import './Suggestions.scss'

const Suggestions = () => {
  const { suggestions, selectedCategoryFilter, suggestionsCount, refreshSuggestions, changeSuggestionsCount } = useContext(SuggestionsContext) as SuggestionsContextType
  const [sortByValue, setSortByValue] = useState(SortByItem.MostUpvotes)

  useEffect(() => {
    const getFeedback = async () => {
      const response = await fetch('https://frontendmentor.com/getFeedback', { method: 'GET' })
      const data = await response.json() as FeedbackResponse
      refreshSuggestions(data.productRequests as ProductRequest[])
    }

    if (localStorage.getItem('suggestions') === null) {
      getFeedback()
    }

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

  const changeSortByValue = (value: SortByItem) => {
    setSortByValue(value)
  }

  return (
    <>
      <SuggestionsToolbar suggestionsCount={suggestionsCount} changeSortByValue={changeSortByValue} />
      <section className='suggestions_data-container' aria-label="Suggestions main content">
        <SuggestionsList
          data={suggestions}
          selectedCategoryFilter={selectedCategoryFilter}
          sortByValue={sortByValue} />
      </section>
    </>
  )
}

export default Suggestions