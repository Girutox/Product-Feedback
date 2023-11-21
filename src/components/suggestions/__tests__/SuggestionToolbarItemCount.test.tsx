import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import SuggestionsToolbarItemCount from '../SuggestionsToolbarItemCount'

describe('SuggestionsToolbarItemCount', () => {
  it('should render heading level 3 for suggestions count', () => {
    const mockData = [
      {
        id: 1,
        suggestion: 'Add image to toolbar'
      },
      {
        id: 2,
        suggestion: 'Remove delete button'
      },
    ]

    render(<SuggestionsToolbarItemCount count={mockData.length} />)

    expect(screen.getByRole('heading', { level: 3, name: `${mockData.length} Suggestions` })).toBeInTheDocument()
  })
})