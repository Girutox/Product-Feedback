import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Suggestions from '../Suggestions'
import { BrowserRouter } from 'react-router-dom'
import SuggestionsProvider from '../../../store/SuggestionsProvider'

describe('Suggestions', () => {
  it('should render toolbar section', () => {
    render(
      <BrowserRouter>
        <SuggestionsProvider>
          <Suggestions />
        </SuggestionsProvider>
      </BrowserRouter>
    )

    const headerElement = screen.getByRole('region', { name: /Suggestions toolbar/i })

    expect(headerElement).toBeInTheDocument()
  })

  it('should render main content section', () => {
    render(
      <BrowserRouter>
        <SuggestionsProvider>
          <Suggestions />
        </SuggestionsProvider>
      </BrowserRouter>
    )

    const mainElement = screen.getByRole('region', { name: /Suggestions main content/i })

    expect(mainElement).toBeInTheDocument()
  })
})