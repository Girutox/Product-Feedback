import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { screenSizes } from '../../../config'
import { FeedbackResponse, SortByItem } from '../suggestionsList/SuggestionsList.d'
import { BrowserRouter } from 'react-router-dom'

import SuggestionsToolbar from '../SuggestionsToolbar'

describe('Suggestions', () => {
  const changeSortByValue: (value: SortByItem) => void = (value: SortByItem) => { console.log(value) }

  it('should render an lightbulb icon', () => {
    render(
      <BrowserRouter>
        <SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />
      </BrowserRouter>
    )

    const lightbulbIconElement = screen.getByRole('img', { name: 'lightbulb' })

    expect(lightbulbIconElement).toBeInTheDocument()
  })

  it.skip('should render heading level 3 for suggestions count', async () => {
    render(
      <BrowserRouter>
        <SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />
      </BrowserRouter>
    )

    // TODO: Mock fetch data or check how to moch with context
    const response = await fetch('https://frontendmentor.com/getFeedback', { method: 'GET' })
    const data = await response.json() as FeedbackResponse

    const suggestionsCount = data.productRequests.length
    const suggestionCounterElement = await screen.findByRole('heading', { level: 3, name: `${suggestionsCount} Suggestions` })

    expect(suggestionCounterElement).toBeInTheDocument()
  })

  it('should render a select element for sorting with a label of "Sort by:"', () => {
    render(
      <BrowserRouter>
        <SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />
      </BrowserRouter>
    )

    const sortingSelectElement = screen.getByRole('combobox', { name: 'Sort by:' })

    expect(sortingSelectElement).toBeInTheDocument()
  })

  it('should render 4 options for sorting', () => {
    render(
      <BrowserRouter>
        <SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />
      </BrowserRouter>
    )

    const sortingSelectElement = screen.getByRole('combobox', { name: 'Sort by:' })
    const sortingOptions = sortingSelectElement.querySelectorAll('option')

    expect(sortingOptions.length).toBe(4)
  })

  it('should render a button element for adding feedbacks', () => {
    render(
      <BrowserRouter>
        <SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />
      </BrowserRouter>
    )

    const addFeedbackButtonElement = screen.getByRole('button', { name: '+ Add Feedback' })

    expect(addFeedbackButtonElement).toBeInTheDocument()
  })

  describe('mobile-size conditions', () => {
    it('should not render lightbulb icon', async () => {
      globalThis.innerWidth = screenSizes.mobileMaximun

      render(
        <BrowserRouter>
          <SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />
        </BrowserRouter>
      )

      const lightbulbIconElement = screen.queryByRole('img', { name: 'lightbulb' })

      expect(lightbulbIconElement).not.toBeInTheDocument()
    })

    it('should not render level 3 heading', async () => {
      globalThis.innerWidth = screenSizes.mobileMaximun

      render(
        <BrowserRouter>
          <SuggestionsToolbar suggestionsCount={0} changeSortByValue={changeSortByValue} />
        </BrowserRouter>
      )

      const headingElement = screen.queryByRole('heading', { level: 3, name: /suggestions/i })

      expect(headingElement).not.toBeInTheDocument()
    })
  })

  //TODO: Add test for changeSortByValue
})