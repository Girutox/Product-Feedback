import { useNavigate, useParams } from 'react-router-dom'
import { SuggestionsContext, SuggestionsContextType } from '../../store/SuggestionsProvider'
import { useContext, useState } from 'react'
import SuggestionItem from '../../components/suggestions/suggestionsList/suggestionItem/SuggestionItem'
import CommentItem from './comments/CommentItem'
import TextArea from '../../components/elements/TextArea'
import Button, { ButtonActionType } from '../../components/elements/Button'

import './FeedbackDetail.scss'
import { SubmitHandler, useForm } from 'react-hook-form'

export interface IFormValues {
  title: string,
  category: string,
  status: string,
  feedbackDetail: string
}

const commentMaxLength = 250

const FeedbackDetail = () => {
  const [ commentLengthCounter, setCommentLengthCounter ] = useState(commentMaxLength)
  
  const navigate = useNavigate()
  const { id } = useParams()
  const { suggestions, addComment, addReply } = useContext(SuggestionsContext) as SuggestionsContextType  

  const { register, handleSubmit, reset } = useForm<IFormValues>()

  const suggestion = suggestions.find(item => item.id === parseInt(id ?? '0'))!

  const goBackHandler = () => {
    navigate(-1)
  }

  const editFeedbackClickHandler = () => {
    navigate(`/manageFeedBack/${suggestion.id}`)
  }

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    addComment(suggestion.id, {
      id: (suggestion.comments?.length ?? 0) + 1,
      content: data.title,
      user: {
        image: './assets/user-images/image-girutox.jpg',
        name: 'Giancarlo Hoyos',
        username: 'girutox'
      },
      replies: []
    })

    reset()
  }

  const commentChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentLengthCounter(commentMaxLength - event.target.value.length)
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
              suggestion.comments && suggestion.comments.map(comment => <CommentItem key={comment.id} suggestionId={suggestion.id} comment={comment} addReply={addReply} />)
            }
          </div>
        </section>
      </>
    }
    <section className='feedback-detail_add-comment'>
      <h3>Add Comment</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextArea label='title' placeHolder='Type your comment here' register={register} required onChange={commentChangeHandler} />
        <div className='feedback-detail_main-form-action-container'>
          <span>{commentLengthCounter} Characters left</span>
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