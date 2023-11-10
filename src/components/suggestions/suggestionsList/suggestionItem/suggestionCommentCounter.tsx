import CommentImage from '../../../../assets/images/shared/icon-comments.svg'

import './SuggestionCommentCounter.scss'

type Props = {
  commentCount: number
}

const SuggestionsCommentCounter = ({ commentCount }: Props) => {
  return (
    <div className='suggestion-comment-counter_container'>
      {/* // TODO: is alt property required here? */}
      <img src={CommentImage} alt="Comment counter" aria-hidden='true' />
      <span className='suggestion-comment-counter_text'>{commentCount}</span>
    </div>
  )
}

export default SuggestionsCommentCounter