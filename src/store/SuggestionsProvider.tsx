import { createContext, useEffect, useState } from 'react'
import { ProductRequest } from '../components/suggestions/suggestionsList/SuggestionsList.d'

export const SuggestionsContext = createContext({
  suggestions: [] as ProductRequest[],
  refreshSuggestions: (suggestions: ProductRequest[]) => { console.log(suggestions) }
})

type SuggestionsProviderProps = {
  children: React.ReactNode
}

const SuggestionsProvider = ({ children }: SuggestionsProviderProps) => {
  const [suggestions, setSuggestions] = useState<ProductRequest[]>([])

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

  const suggestionsContext = {
    suggestions,
    refreshSuggestions
  }

  return (
    <SuggestionsContext.Provider value={suggestionsContext}>
      {children}
    </SuggestionsContext.Provider>
  )
}

export default SuggestionsProvider