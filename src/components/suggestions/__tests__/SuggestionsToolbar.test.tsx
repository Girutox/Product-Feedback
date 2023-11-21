import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { screenSizes } from '../../../config'
import { FeedbackResponse } from '../suggestionsList/SuggestionsList.d'

import SuggestionsToolbar from '../SuggestionsToolbar'

describe('Suggestions', () => {
  it('should render an lightbulb icon', () => {
    render(<SuggestionsToolbar />)

    const lightbulbIconElement = screen.getByRole('img', { name: 'lightbulb' })

    expect(lightbulbIconElement).toBeInTheDocument()
  })

  it('should render a select element for sorting with a label of "Sort by:"', () => {
    render(<SuggestionsToolbar />)

    const sortingSelectElement = screen.getByRole('combobox', { name: 'Sort by:' })

    expect(sortingSelectElement).toBeInTheDocument()
  })

  it.skip('should render heading level 3 for suggestions count', async () => {
    render(<SuggestionsToolbar />)

    const response = await fetch('https://frontendmentor.com/getFeedback')
    const data = await response.json() as FeedbackResponse

    expect(screen.getByRole('heading', { level: 3, name: `${data.productRequests.length} Suggestions` })).toBeInTheDocument()
  })

  it('should render 4 options for sorting', () => {
    render(<SuggestionsToolbar />)

    const sortingSelectElement = screen.getByRole('combobox', { name: 'Sort by:' })
    const sortingOptions = sortingSelectElement.querySelectorAll('option')

    expect(sortingOptions.length).toBe(4)
  })

  it('should render a button element for adding feedbacks', () => {
    render(<SuggestionsToolbar />)

    const addFeedbackButtonElement = screen.getByRole('button', { name: '+ Add Feedback' })

    expect(addFeedbackButtonElement).toBeInTheDocument()
  })

  describe('mobile-size conditions', () => {
    it('should not render lightbulb icon', async () => {
      globalThis.innerWidth = screenSizes.mobileMaximun

      render(<SuggestionsToolbar />)

      const lightbulbIconElement = screen.queryByRole('img', { name: 'lightbulb' })

      expect(lightbulbIconElement).not.toBeInTheDocument()
    })

    it('should not render level 3 heading', async () => {
      globalThis.innerWidth = screenSizes.mobileMaximun

      render(<SuggestionsToolbar />)

      const headingElement = screen.queryByRole('heading', { level: 3, name: /suggestions/i })

      expect(headingElement).not.toBeInTheDocument()
    })
  })
})