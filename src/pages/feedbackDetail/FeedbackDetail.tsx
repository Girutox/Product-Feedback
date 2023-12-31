import { useNavigate, useParams } from 'react-router-dom'
import { SuggestionsContext, SuggestionsContextType } from '../../store/SuggestionsProvider'
import { useContext } from 'react'
import SuggestionItem from '../../components/suggestions/suggestionsList/suggestionItem/SuggestionItem'
import CommentItem from './comments/CommentItem'
import TextArea from '../../components/elements/TextArea'
import Button, { ButtonActionType } from '../../components/elements/Button'

import './FeedbackDetail.scss'

const FeedbackDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { suggestions } = useContext(SuggestionsContext) as SuggestionsContextType

  const suggestion = suggestions.find(item => item.id === parseInt(id ?? '0'))!

  const goBackHandler = () => {
    navigate(-1)
  }

  const editFeedbackClickHandler = () => {
    navigate(`/manageFeedBack/${suggestion.id}`)
  }

  return (
    <main className='feedback-detail_main-container'>
      <nav className='feedback-detail_nav'>
        <a href='#' onClick={goBackHandler}>
          <img src={'/src/assets/images/shared/icon-arrow-left.svg'} alt="" aria-hidden={true} />
          <span>Go back</span>
        </a>
        <Button type='button' actionType={ButtonActionType.ADD} onClick={editFeedbackClickHandler}>Edit Feeback</Button>
      </nav>
      {
        suggestion &&
        <>
          <SuggestionItem suggestion={suggestion} />
          <section className='feedback-detail_comments-container'>
            <h3>{suggestion.comments?.length ?? 0} Comments</h3>
            <div className='feedback-detail_comments-details'>
              {
                suggestion.comments && suggestion.comments.map(comment => <CommentItem key={comment.id} comment={comment} />)
              }
            </div>
          </section>
        </>
      }
      <section className='feedback-detail_add-comment'>
        <h3>Add Comment</h3>
        <form>
          <TextArea label='title' placeHolder='Type your comment here' />
          <div className='feedback-detail_main-form-action-container'>
            <span>250 Characters left</span>
            <Button type='submit' actionType={ButtonActionType.ADD}>
              Post Comment
            </Button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default FeedbackDetail