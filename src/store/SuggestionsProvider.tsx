import { createContext, useEffect, useState } from 'react'
import { ProductRequest } from '../components/suggestions/suggestionsList/SuggestionsList.d'
import { IFormValues } from '../pages/manageSuggestion/ManageSuggestion'

export type SuggestionsContextType = {
  suggestions: ProductRequest[],
  selectedCategoryFilter: string,
  suggestionsCount: number,
  refreshSuggestions: (suggestions: ProductRequest[]) => void,
  changeActiveCategoryFilter: (categoryFilter: string) => void,
  changeSuggestionsCount: (suggestionsCount: number) => void,
  addSuggestion: (suggestion: IFormValues) => void
}

export const SuggestionsContext = createContext<SuggestionsContextType>({} as SuggestionsContextType)

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

  const addSuggestion = (suggestion: IFormValues) => {
    const newSuggestion: ProductRequest = {
      id: suggestions.length + 1,
      title: suggestion.title,
      category: suggestion.category,
      upvotes: 0,
      status: 'suggestion',
      description: suggestion.feedbackDetail,
    }

    localStorage.setItem('suggestions', JSON.stringify([...suggestions, newSuggestion]))
    setSuggestions([...suggestions, newSuggestion])
  }

  const suggestionsContext = {
    suggestions,
    selectedCategoryFilter,
    suggestionsCount,
    refreshSuggestions,
    changeActiveCategoryFilter,
    changeSuggestionsCount,
    addSuggestion
  }

  return (
    <SuggestionsContext.Provider value={suggestionsContext}>
      {children}
    </SuggestionsContext.Provider>
  )
}

export default SuggestionsProvider