import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SuggestionUpVoter from '../SuggestionUpVoter'

describe('SuggestionUpVoter', () => {
  // TODO: Test with SVG Sprite
  it.skip('should render with "up" svg', () => {
    render(<SuggestionUpVoter upvotes={0} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should render provided upvote count', () => {
    const upvoteCount = 3
    render(<SuggestionUpVoter upvotes={upvoteCount} />)

    expect(screen.getByText(upvoteCount)).toBeInTheDocument()
  })

  describe('when active', () => {
    it('should change to active state if clicked when inactive', async () => {
      render(<SuggestionUpVoter upvotes={3} />)

      const upvoteButton = screen.getByRole('button') as HTMLButtonElement
      await userEvent.click(upvoteButton)

      expect(upvoteButton).toHaveClass('suggestion-upvoter_button--active')
    })

    it('should sum + 1 the current vote count if clicked when inactive', async () => {
      const upvoteCount = 3

      render(<SuggestionUpVoter upvotes={upvoteCount} />)

      const upvoteButton = screen.getByRole('button') as HTMLButtonElement
      await userEvent.click(upvoteButton)

      expect(screen.getByText(upvoteCount + 1)).toBeInTheDocument()
    })
  })

  describe('when inactive', () => {
    it('should change to inactive state if clicked when active', async () => {
      render(<SuggestionUpVoter upvotes={3} />)

      const upvoteButton = screen.getByRole('button') as HTMLButtonElement

      await userEvent.click(upvoteButton)
      expect(upvoteButton).toHaveClass('suggestion-upvoter_button--active')

      await userEvent.click(upvoteButton)
      expect(upvoteButton).not.toHaveClass('suggestion-upvoter_button--active')
    })

    it('should render the original vote count if clicked when active', async () => {
      const upvoteCount = 3

      render(<SuggestionUpVoter upvotes={upvoteCount} />)

      const upvoteButton = screen.getByRole('button') as HTMLButtonElement
      await userEvent.click(upvoteButton)
      await userEvent.click(upvoteButton)

      expect(screen.getByText(upvoteCount)).toBeInTheDocument()
    })
  })
})