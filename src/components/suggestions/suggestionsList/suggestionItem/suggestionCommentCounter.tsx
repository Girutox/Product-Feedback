import CommentImage from '../../../../assets/images/shared/icon-comments.svg'

import './SuggestionCommentCounter.scss'

type Props = {
  commentCount: number,
  onClick?: () => void
}

const SuggestionsCommentCounter = ({ commentCount, onClick }: Props) => {

  const modifierClass = onClick ? 'suggestion-comment-counter_container--has-events' : ''

  return (
    <div className={`suggestion-comment-counter_container ${modifierClass}`} onClick={onClick}>
      <img src={CommentImage} alt="Comment counter" />
      <span className='suggestion-comment-counter_text'>{commentCount}</span>
    </div>
  )
}

export default SuggestionsCommentCounter