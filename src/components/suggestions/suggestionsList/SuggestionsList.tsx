import { useNavigate } from 'react-router-dom'
import Button from '../../elements/Button'
import SuggestionItem from './suggestionItem/SuggestionItem'
import { ProductRequest, SortByItem } from './SuggestionsList.d'

import './SuggestionsList.scss'

type SuggestionsListProps = {
  data: ProductRequest[],
  selectedCategoryFilter: string,
  sortByValue: SortByItem
}

const SuggestionsList = ({ data, selectedCategoryFilter, sortByValue }: SuggestionsListProps) => {
  const filteredData = selectedCategoryFilter === 'all' ? data : data.filter((item) => item.category === selectedCategoryFilter)
  const navigate = useNavigate()

  const addFeedbackClickHandler = () => {
    navigate('/manageFeedBack')
  }

  const sortBy = () => {
    switch (sortByValue) {
      case SortByItem.MostUpvotes:
        return filteredData.sort((a, b) => b.upvotes - a.upvotes)
      case SortByItem.LeastUpvotes:
        return filteredData.sort((a, b) => a.upvotes - b.upvotes)
      case SortByItem.MostComments:
        return filteredData.sort((a, b) => (b.comments?.length ?? 0) - (a.comments?.length ?? 0))
      case SortByItem.LeastComments:
        return filteredData.sort((a, b) => (a.comments?.length ?? 0) - (b.comments?.length ?? 0))
      default:
        return filteredData
    }
  }

  const sortedData = sortBy()

  return (
    <>
      {
        sortedData.length > 0 &&
        <div className='suggestions-list_regular-container'>
          {
            sortedData.map((suggestion: ProductRequest) => (
              <SuggestionItem key={suggestion.id} {...suggestion} />
            ))
          }
        </div>
      }
      {
        !sortedData.length &&
        <div className='suggestions-list_empty-container'>
          <img width={130} height={136} src={'src/assets/images/suggestions/illustration-empty.svg'} alt="" aria-hidden={true} />
          <span className='suggestions-list_no-data-title'>There is no feedback yet.</span>
          <p className='suggestions-list_no-data-message'>
            Got a suggestion? Found a bug that needs to be squashed?
            <br /> 
            We love hearing about new ideas to improve our app.
          </p>
          <Button onClick={addFeedbackClickHandler}>+ Add Feedback</Button>
        </div>
      }
    </>
  )
}

export default SuggestionsList