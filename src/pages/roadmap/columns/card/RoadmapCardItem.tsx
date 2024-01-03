import { useNavigate } from 'react-router-dom'
import CategoryButton from '../../../../components/elements/CategoryButton'
import { ProductRequest } from '../../../../components/suggestions/suggestionsList/SuggestionsList.d'
import SuggestionUpVoter from '../../../../components/suggestions/suggestionsList/suggestionItem/SuggestionUpVoter'
import SuggestionsCommentCounter from '../../../../components/suggestions/suggestionsList/suggestionItem/suggestionCommentCounter'
import { capitalizeFirstLetter } from '../../../../utils/global'
import './RoadmapCardItem.scss'

const backgroundColorVariants: { [key: string]: string } = {
  'planned': 'bg-marker',
  'in-progress': 'bg-primary',
  'live': 'bg-marker-light',
  'suggestion': 'bg-info'
}

type RoadmapCardItemProps = {
  suggestion: ProductRequest
}

const RoadmapCardItem = ({ suggestion }: RoadmapCardItemProps) => {
  const { status, title, description } = suggestion
  const backgroundColor = backgroundColorVariants[suggestion.status]

  const navigate = useNavigate()

  const editSuggestionClickHandler = () => {
    navigate(`/manageFeedback/${suggestion.id}`)
  }

  const manageCommentsClickHandler = () => {
    navigate(`/feedbackDetail/${suggestion.id}`)
  }

  return (
    <div className='roadmap-card-item_container'>
      <div className={`roadmap-card-item_top-border ${backgroundColor}`}></div>

      <ul>
        <li>
          <div className={`roadmap-card-item_circle ${backgroundColor}`} />
          {capitalizeFirstLetter(status)}
        </li>
      </ul>
      <div>
        <h3 onClick={editSuggestionClickHandler}>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <CategoryButton disabled>
          {suggestion.category}
        </CategoryButton>
      </div>
      <div className='roadmap-card-item_actions'>
        <SuggestionUpVoter suggestionId={suggestion.id} upvotes={suggestion.upvotes} horizontalLayout />
        <SuggestionsCommentCounter commentCount={suggestion.comments?.length ?? 0} onClick={manageCommentsClickHandler} />
      </div>
    </div>
  )
}

export default RoadmapCardItem