import { createContext, useEffect, useState } from 'react'
import { ProductRequest, Comment, Reply } from '../components/suggestions/suggestionsList/SuggestionsList.d'
import { IFormValues } from '../pages/manageSuggestion/ManageSuggestion'

export type SuggestionsContextType = {
  suggestions: ProductRequest[],
  selectedCategoryFilter: string,
  suggestionsCount: number,
  refreshSuggestions: (suggestions: ProductRequest[]) => void,
  changeActiveCategoryFilter: (categoryFilter: string) => void,
  changeSuggestionsCount: (suggestionsCount: number) => void,

  addSuggestion: (suggestion: IFormValues) => void,
  updateSuggestion: (suggestion: ProductRequest) => void,
  deleteSuggestion: (suggestionId: number) => void,

  addComment: (suggestionId: number, comment: Comment) => void,
  addReply: (suggestionId: number, commentId: number, reply: Reply) => void,
  changeVoteCount: (suggestionId: number, voteCount: number) => void
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

  const changeVoteCount = (suggestionId: number, voteCount: number) => {
    const suggestionItem = suggestions.find(item => item.id === suggestionId)
    if (suggestionItem) {
      suggestionItem.upvotes = voteCount

      const updatedSuggestions = suggestions.map(item => item.id === suggestionId ? suggestionItem : item)

      localStorage.setItem('suggestions', JSON.stringify(updatedSuggestions))
      setSuggestions(updatedSuggestions)
    }
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

  const updateSuggestion = (suggestion: ProductRequest) => {
    const suggestionItem = suggestions.find(item => item.id === suggestion.id)
    if (suggestionItem) {
      suggestionItem.title = suggestion.title
      suggestionItem.category = suggestion.category
      suggestionItem.status = suggestion.status
      suggestionItem.description = suggestion.description

      const updatedSuggestions = suggestions.map(item => item.id === suggestion.id ? suggestionItem : item)

      localStorage.setItem('suggestions', JSON.stringify(updatedSuggestions))
      setSuggestions(updatedSuggestions)
    }
  }

  const deleteSuggestion = (suggestionId: number) => {
    const updatedSuggestions = suggestions.filter(item => item.id !== suggestionId)

    localStorage.setItem('suggestions', JSON.stringify(updatedSuggestions))
    setSuggestions(updatedSuggestions)
  }

  const addComment = (suggestionId: number, comment: Comment) => {
    const suggestionItem = suggestions.find(item => item.id === suggestionId)
    if (suggestionItem) {
      if (!suggestionItem.comments) {
        suggestionItem.comments = []
      }
      suggestionItem.comments = [...suggestionItem.comments, comment]

      const updatedSuggestions = suggestions.map(item => item.id === suggestionId ? suggestionItem : item)

      localStorage.setItem('suggestions', JSON.stringify(updatedSuggestions))
      setSuggestions(updatedSuggestions)
    }
  }

  const addReply = (suggestionId: number, commentId: number, reply: Reply) => {
    const suggestionItem = suggestions.find(item => item.id === suggestionId)
    if (suggestionItem) {
      const commentItem = suggestionItem.comments?.find(item => item.id === commentId)
      if (commentItem) {
        if (!commentItem.replies) {
          commentItem.replies = []
        }
        commentItem.replies = [...commentItem.replies!, reply]

        const updatedSuggestions = suggestions.map(item => item.id === suggestionId ? suggestionItem : item)

        localStorage.setItem('suggestions', JSON.stringify(updatedSuggestions))
        setSuggestions(updatedSuggestions)
      }
    }
  }

  const suggestionsContext = {
    suggestions,
    selectedCategoryFilter,
    suggestionsCount,
    refreshSuggestions,
    changeActiveCategoryFilter,
    changeSuggestionsCount,
    addSuggestion,
    updateSuggestion,
    deleteSuggestion,
    addComment,
    addReply,
    changeVoteCount
  }

  return (
    <SuggestionsContext.Provider value={suggestionsContext}>
      {children}
    </SuggestionsContext.Provider>
  )
}

export default SuggestionsProvider