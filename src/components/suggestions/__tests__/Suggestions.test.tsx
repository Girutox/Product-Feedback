import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Suggestions from '../Suggestions'
import { BrowserRouter } from 'react-router-dom'

describe('Suggestions', () => {
  it('should render toolbar section', () => {
    render(
      <BrowserRouter>
        <Suggestions />
      </BrowserRouter>
    )

    const headerElement = screen.getByRole('region', { name: /Suggestions toolbar/i })

    expect(headerElement).toBeInTheDocument()
  })

  it('should render main content section', () => {
    render(
      <BrowserRouter >
        <Suggestions />
      </BrowserRouter >
    )

    const mainElement = screen.getByRole('region', { name: /Suggestions main content/i })

    expect(mainElement).toBeInTheDocument()
  })
})