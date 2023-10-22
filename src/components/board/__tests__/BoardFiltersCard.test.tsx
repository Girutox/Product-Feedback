import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import BoardFiltersCard from '../BoardFiltersCard'

describe('BoardFiltersCard', () => {
  it('should render the component with an "All" filter option', () => {
    render(<BoardFiltersCard />)

    expect(screen.getByText('All')).toBeInTheDocument()
  })

  it('should render with default card class', () => {
    render(<BoardFiltersCard />)

    const childElement = screen.getByText('All')

    expect(childElement.parentElement).toHaveClass('default-card_container')
  })    
})