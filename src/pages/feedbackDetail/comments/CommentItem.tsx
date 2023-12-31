import { Comment } from '../../../components/suggestions/suggestionsList/SuggestionsList.d'
import './CommentItem.scss'

type CommentItemProps = {
  comment: Comment
}

const CommentItem = ({ comment }: CommentItemProps) => {
  const imageUrlSplit = comment.user.image.split('/')
  const imageFileName = imageUrlSplit[imageUrlSplit.length - 1]

  return <div className='comment_container'>
    <div className='comment_avatar-container'>
      <img src={`/src/assets/images/user-images/${imageFileName}`} alt={`User avatar for ${comment.user.username}`} />
    </div>
    <div className='comment_info-container'>
      <div className='comment_user-info'>
        <div className='comment_user-name'>
          <h4>{comment.user.name}</h4>
          <span>@{comment.user.username}</span>
        </div>
        <div className='comment_reply'>
          <button>Reply</button>
        </div>
      </div>
      <div className='comment_content'>
        <p>
          {comment.content}
        </p>
      </div>
    </div>
  </div>
}

export default CommentItem