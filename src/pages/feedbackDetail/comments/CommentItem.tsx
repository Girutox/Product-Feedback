import { useState } from 'react'
import { Comment, Reply } from '../../../components/suggestions/suggestionsList/SuggestionsList.d'
import TextArea from '../../../components/elements/TextArea'
import Button, { ButtonActionType } from '../../../components/elements/Button'

import './CommentItem.scss'
import { SubmitHandler, useForm } from 'react-hook-form'

export interface IFormValues {
  title: string,
  category: string,
  status: string,
  feedbackDetail: string
}

type CommentLayoutProps = {
  suggestionId: number,
  id?: number,
  image: string,
  name: string,
  userName: string,
  comment: string,
  replies?: Reply[],
  isReply?: boolean,
  replyingTo?: string,
  addReply?: (suggestionId: number, commentId: number, reply: Reply) => void
}

type CommentItemProps = {
  suggestionId: number,
  comment: Comment,
  addReply: (suggestionId: number, commentId: number, reply: Reply) => void
}

const CommentLayout = ({ suggestionId, id, image, name, userName, comment, replies, isReply, replyingTo, addReply }: CommentLayoutProps) => {
  const [showReplySection, setShowReplySection] = useState(false)

  const imageUrlSplit = image.split('/')
  const imageFileName = imageUrlSplit[imageUrlSplit.length - 1]

  const mainCommentModifierClass = !isReply ? 'comment_container--main-comment' : ''
  const replyModifierClass = isReply ? 'comment_reply' : ''

  const { register, handleSubmit, reset } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    if (addReply) {
      addReply(suggestionId, id!, {
        content: data.category,
        user: {
          image: './assets/user-images/image-girutox.jpg',
          name: 'Giancarlo Hoyos',
          username: 'girutox'
        },
        replyingTo: userName
      })

      reset()
      setShowReplySection(false)
    }
  }

  return <div className={`comment_container ${replyModifierClass} ${mainCommentModifierClass}`}>
    <div className='comment_avatar-container'>
      <img src={`/src/assets/images/user-images/${imageFileName}`} alt={`User avatar for ${userName}`} />
      {
        (replies?.length ?? 0) > 0 && <hr />
      }
    </div>
    <div className='comment_info-container'>
      <section className='comment_renderer'>
        <div className='comment_user-info'>
          <div className='comment_user-name'>
            <h4>{name}</h4>
            <span>@{userName}</span>
          </div>
          <div className='comment_reply'>
            {
              !isReply && <button onClick={() => setShowReplySection(true)}>Reply</button>
            }
          </div>
        </div>
        <div className='comment_content'>
          <p>
            {
              isReply && <span className='comment_replyingTo'>@{replyingTo} </span>
            }
            {comment}
          </p>
        </div>
      </section>
      {
        showReplySection && <section className='comment_reply-section'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextArea label='category' register={register} required />
            <Button type='submit' actionType={ButtonActionType.ADD}>
              Post Reply
            </Button>
          </form>
        </section>
      }
      {
        replies && replies.map((reply, index) => <CommentLayout suggestionId={suggestionId} key={index} image={reply.user.image} name={reply.user.name} userName={reply.user.username} comment={reply.content} isReply={true} replyingTo={reply.replyingTo} />)
      }
    </div>
  </div>
}

const CommentItem = ({ suggestionId, comment, addReply }: CommentItemProps) => {
  return (
    <CommentLayout suggestionId={suggestionId} id={comment.id} image={comment.user.image} name={comment.user.name} userName={comment.user.username} comment={comment.content} replies={comment.replies} addReply={addReply} />
  )
}

export default CommentItem