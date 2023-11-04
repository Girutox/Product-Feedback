import LightbulbIcon from '../../assets/images/suggestions/icon-suggestions.svg'
import Button from '../elements/Button'

import './SuggestionsToolbar.scss'

const SuggestionsToolbar = () => {
  const suggestionsCount = 6

  return (
    <section className="suggestions-toolbar_container" aria-label="Suggestions toolbar">
      <img width={23} height={24} src={LightbulbIcon} alt="lightbulb" />
      <h3>{suggestionsCount} Suggestions</h3>
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
    </section>
  )
}

export default SuggestionsToolbar