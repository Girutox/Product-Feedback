import { createContext, useEffect, useState } from 'react'
import { ProductRequest } from '../components/suggestions/suggestionsList/SuggestionsList.d'

export const SuggestionsContext = createContext({
  suggestions: [] as ProductRequest[],
  selectedCategoryFilter: 'all',
  suggestionsCount: 0,
  refreshSuggestions: (suggestions: ProductRequest[]) => { console.log(suggestions) },
  changeActiveCategoryFilter: (categoryFilter: string) => { console.log(categoryFilter) },
  changeSuggestionsCount: (suggestionsCount: number) => { console.log(suggestionsCount) }
})

type SuggestionsProviderProps = {
  children: React.ReactNode
}

const SuggestionsProvider = ({ children }: SuggestionsProviderProps) => {
  const [suggestions, setSuggestions] = useState<ProductRequest[]>([])
  const [suggestionsCount, setSuggestionsCount] = useState(0)
  const [selectedCategoryFilter, setselectedCategoryFilter] = useState('all')

  useEffect(() => {
    const suggestionLocalStorage = localStorage.getItem('suggestions')

    if (suggestionLocalStorage) {
      setSuggestions(JSON.parse(suggestionLocalStorage) as ProductRequest[])
    }
  }, [])

  const refreshSuggestions = (suggestions: ProductRequest[]) => {
    localStorage.setItem('suggestions', JSON.stringify(suggestions))
    setSuggestions(suggestions)
  }

  const changeActiveCategoryFilter = (categoryFilter: string) => {
    setselectedCategoryFilter(categoryFilter)
  }

  const changeSuggestionsCount = (suggestionsCount: number) => {
    setSuggestionsCount(suggestionsCount)
  }

  const suggestionsContext = {
    suggestions,
    selectedCategoryFilter,
    suggestionsCount,
    refreshSuggestions,
    changeActiveCategoryFilter,
    changeSuggestionsCount
  }

  return (
    <SuggestionsContext.Provider value={suggestionsContext}>
      {children}
    </SuggestionsContext.Provider>
  )
}

export default SuggestionsProvider