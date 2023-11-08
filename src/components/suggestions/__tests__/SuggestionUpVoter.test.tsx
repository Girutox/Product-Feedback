import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SuggestionUpVoter from '../suggestionsList/suggestionItem/SuggestionUpVoter'

describe('SuggestionUpVoter', () => {
  // TODO: Find a way to test for SVG
  it.skip('should render with "up" svg', () => {
    render(<SuggestionUpVoter upvotes={0} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should render provided upvote count', () => {
    const upvoteCount = 3
    render(<SuggestionUpVoter upvotes={upvoteCount} />)

    expect(screen.getByText(upvoteCount)).toBeInTheDocument()
  })

  it('should change to active state if clicked', async () => {
    render(<SuggestionUpVoter upvotes={3} />)

    const upvoteButton = screen.getByRole('button') as HTMLButtonElement
    await userEvent.click(upvoteButton)

    expect(upvoteButton).toHaveClass('suggestion-upvoter_button--active')
  })
})