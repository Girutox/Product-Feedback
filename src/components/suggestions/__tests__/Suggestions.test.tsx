import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Suggestions from '../Suggestions'

describe('Suggestions', () => {
  it('should render toolbar section', () => {
    render(<Suggestions />)

    const headerElement = screen.getByRole('region', { name: /Suggestions toolbar/i })

    expect(headerElement).toBeInTheDocument()
  })

  it('should render main content section', () => {
    render(<Suggestions />)

    const mainElement = screen.getByRole('region', { name: /Suggestions main content/i })

    expect(mainElement).toBeInTheDocument()
  })
})