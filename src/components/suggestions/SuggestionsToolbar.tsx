import LightbulbIcon from '../../assets/images/suggestions/icon-suggestions.svg'
import useWindowSize from '../../hooks/useWindowsSize'
import Button from '../elements/Button'
import { screenSizes } from '../../config'

import './SuggestionsToolbar.scss'
import { useContext } from 'react'
import { SuggestionsContext } from '../../store/SuggestionsProvider'

const SuggestionsToolbar = () => {
  const { suggestions } = useContext(SuggestionsContext)
  const { width } = useWindowSize()

  return (
    <section className="suggestions-toolbar_container" aria-label="Suggestions toolbar">
      {
        width > screenSizes.mobileMaximun &&
        <>
          <img width={23} height={24} src={LightbulbIcon} alt="lightbulb" />
          <h3>{suggestions.length} Suggestions</h3>
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
          <Button>+ Add Feedback</Button>
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
          <Button>+ Add Feedback</Button>
        </>
      }

    </section>
  )
}

export default SuggestionsToolbar