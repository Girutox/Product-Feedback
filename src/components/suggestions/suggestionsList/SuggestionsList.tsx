import Button from '../../elements/Button'
import SuggestionItem from './suggestionItem/SuggestionItem'
import { ProductRequest } from './SuggestionsList.d'

import './SuggestionsList.scss'

type SuggestionsListProps = {
  data: ProductRequest[],
  selectedCategoryFilter: string
}

const SuggestionsList = ({ data, selectedCategoryFilter }: SuggestionsListProps) => {
  const filteredData = selectedCategoryFilter === 'all' ? data : data.filter((item) => item.category === selectedCategoryFilter)  

  return (
    <>
      {
        filteredData.length > 0 &&
        <div className='suggestions-list_regular-container'>
          {
            filteredData.map((suggestion: ProductRequest) => (
              <SuggestionItem key={suggestion.id} {...suggestion} />
            ))
          }
        </div>
      }
      {
        !filteredData.length &&
        <div className='suggestions-list_empty-container'>
          <img width={130} height={136} src={'src/assets/images/suggestions/illustration-empty.svg'} alt="" aria-hidden={true} />
          <span className='suggestions-list_no-data-title'>There is no feedback yet.</span>
          <p className='suggestions-list_no-data-message'>
            Got a suggestion? Found a bug that needs to be squashed?
            <br /> 
            We love hearing about new ideas to improve our app.
          </p>
          <Button>+ Add Feedback</Button>
        </div>
      }
    </>
  )
}

export default SuggestionsList