import LightbulbIcon from '../../assets/images/suggestions/icon-suggestions.svg'
import useWindowSize from '../../hooks/useWindowsSize'
import Button from '../elements/Button'
import { screenSizes } from '../../config'
import { SortByItem } from './suggestionsList/SuggestionsList.d'
import { useNavigate } from 'react-router-dom'

import './SuggestionsToolbar.scss'

type SuggestionsToolbarProps = {
  suggestionsCount: number,
  changeSortByValue: (value: SortByItem) => void
}

const SuggestionsToolbar = ({ suggestionsCount, changeSortByValue }: SuggestionsToolbarProps) => {
  const { width } = useWindowSize()
  const navigate = useNavigate()

  const sortByChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    const sortByValue: SortByItem = parseInt(selectedValue)
    changeSortByValue(sortByValue)
  }

  const addFeedbackClickHandler = () => {
    navigate('/manageFeedBack')
  }

  return (
    <section className="suggestions-toolbar_container" aria-label="Suggestions toolbar">
      {
        width > screenSizes.mobileMaximun &&
        <>
          <img width={23} height={24} src={LightbulbIcon} alt="lightbulb" />
          <h3>{suggestionsCount} Suggestions</h3>
          <div className='suggestions-toolbar_sort-by'>
            <label htmlFor="sortBy">Sort by:</label>
            &nbsp;
            <select name="sortBy" id="sortBy" onChange={sortByChangeHandler}>
              <option value={SortByItem.MostUpvotes}>Most Upvotes</option>
              <option value={SortByItem.LeastUpvotes}>Least Upvotes</option>
              <option value={SortByItem.MostComments}>Most Comments</option>
              <option value={SortByItem.LeastComments}>Least Comments</option>
            </select>
          </div>
          <Button onClick={addFeedbackClickHandler}>+ Add Feedback</Button>
        </>
      }
      {
        width <= screenSizes.mobileMaximun &&
        <>
          <div className='suggestions-toolbar_sort-by'>
            <label htmlFor="sortBy">Sort by:</label>
            &nbsp;
            <select name="sortBy" id="sortBy">
              <option value={1}>Most Upvotes</option>
              <option value={2}>Least Upvotes</option>
              <option value={3}>Most Comments</option>
              <option value={4}>Least Comments</option>
            </select>
          </div>
          <Button onClick={addFeedbackClickHandler}>+ Add Feedback</Button>
        </>
      }

    </section>
  )
}

export default SuggestionsToolbar