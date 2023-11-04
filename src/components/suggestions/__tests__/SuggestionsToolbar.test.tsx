import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import SuggestionsToolbar from '../SuggestionsToolbar'

// TODO: Ask Ronald about test conditions for different screen sizes

describe('Suggestions', () => {
  it('should render an lightbulb icon', () => {
    render(<SuggestionsToolbar />)

    const lightbulbIconElement = screen.getByRole('img', { name: 'lightbulb' })

    expect(lightbulbIconElement).toBeInTheDocument()
  })

  it('should render heading level 3 for suggestions count', () => {
    render(<SuggestionsToolbar />)

    const suggestionsCount = 6
    const suggestionCounterElement = screen.getByRole('heading', { level: 3, name: `${suggestionsCount} Suggestions`})

    expect(suggestionCounterElement).toBeInTheDocument()
  })

  it('should render a select element for sorting with a label of "Sort by:"', () => {
    render(<SuggestionsToolbar />)

    const sortingSelectElement = screen.getByRole('combobox', { name: 'Sort by:' })

    expect(sortingSelectElement).toBeInTheDocument()
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
})