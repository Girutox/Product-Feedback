import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import BoardFiltersCard from '../BoardFiltersCard'

describe('BoardFiltersCard', () => {
  it('should render with an "All" badge option', () => {
    render(<BoardFiltersCard />)

    const childElement = screen.getByText('All')

    expect(childElement).toHaveClass('badge_container')
  })

  it('should render with default card class', () => {
    render(<BoardFiltersCard />)

    const childElement = screen.getByText('All')

    expect(childElement.parentElement).toHaveClass('default-card_container')
  })    
})