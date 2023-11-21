import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SuggestionsCommentCounter from '../suggestionCommentCounter'

describe('SuggestionCommentCounter', () => {
  it('should render with "comment" image/icon', () => {
    render(<SuggestionsCommentCounter commentCount={3} />)

    const commentImage = screen.getByRole('img', {name: /comment counter/i})

    expect(commentImage).toBeInTheDocument()
  })

  it('should render provided comment count', () => {
    const commentCount = 3
    render(<SuggestionsCommentCounter commentCount={commentCount} />)

    expect(screen.getByText(commentCount)).toBeInTheDocument()
  })
})