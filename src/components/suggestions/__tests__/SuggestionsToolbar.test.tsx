import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { screenSizes } from '../../../config'
import { FeedbackResponse, SortByItem } from '../suggestionsList/SuggestionsList.d'

import SuggestionsToolbar from '../SuggestionsToolbar'

describe('Suggestions', () => {
  const changeSortByValue: (value: SortByItem) => void = (value: SortByItem) => { console.log(value) }

  it('should render an lightbulb icon', () => {
    render(<SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />)

    const lightbulbIconElement = screen.getByRole('img', { name: 'lightbulb' })

    expect(lightbulbIconElement).toBeInTheDocument()
  })

  it.skip('should render heading level 3 for suggestions count', async () => {
    render(<SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />)

    // TODO: Mock fetch data or check how to moch with context
    const response = await fetch('https://frontendmentor.com/getFeedback', { method: 'GET' })
    const data = await response.json() as FeedbackResponse

    const suggestionsCount = data.productRequests.length
    const suggestionCounterElement = await screen.findByRole('heading', { level: 3, name: `${suggestionsCount} Suggestions`})

    screen.debug()

    expect(suggestionCounterElement).toBeInTheDocument()
  })

  it('should render a select element for sorting with a label of "Sort by:"', () => {
    render(<SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />)

    const sortingSelectElement = screen.getByRole('combobox', { name: 'Sort by:' })

    expect(sortingSelectElement).toBeInTheDocument()
  })

  it('should render 4 options for sorting', () => {
    render(<SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />)

    const sortingSelectElement = screen.getByRole('combobox', { name: 'Sort by:' })
    const sortingOptions = sortingSelectElement.querySelectorAll('option')

    expect(sortingOptions.length).toBe(4)
  })

  it('should render a button element for adding feedbacks', () => {
    render(<SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />)

    const addFeedbackButtonElement = screen.getByRole('button', { name: '+ Add Feedback' })

    expect(addFeedbackButtonElement).toBeInTheDocument()
  })

  describe('mobile-size conditions', () => {
    it('should not render lightbulb icon', async () => {
      globalThis.innerWidth = screenSizes.mobileMaximun

      render(<SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />)

      const lightbulbIconElement = screen.queryByRole('img', { name: 'lightbulb' })

      expect(lightbulbIconElement).not.toBeInTheDocument()
    })

    it('should not render level 3 heading', async () => {
      globalThis.innerWidth = screenSizes.mobileMaximun

      render(<SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />)

      const headingElement = screen.queryByRole('heading', { level: 3, name: /suggestions/i })

      expect(headingElement).not.toBeInTheDocument()
    })
  })

  //TODO: Add test for changeSortByValue
})