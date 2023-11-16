import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import BoardFiltersCard from '../BoardFiltersCard'

describe('BoardFiltersCard', () => {
  it('should render with a category button called "All"', () => {
    render(<BoardFiltersCard />)

    const childElement = screen.getByText('All')

    expect(childElement).toHaveClass('category-button')
  })

  it('should render with a category button called "UI"', () => {
    render(<BoardFiltersCard />)

    const childElement = screen.getByText('UI')

    expect(childElement).toHaveClass('category-button')
  })

  it('should render with a category button called "UX"', () => {
    render(<BoardFiltersCard />)

    const childElement = screen.getByText('UX')

    expect(childElement).toHaveClass('category-button')
  })

  it('should render with a category button called "Enhancement"', () => {
    render(<BoardFiltersCard />)

    const childElement = screen.getByText('Enhancement')

    expect(childElement).toHaveClass('category-button')
  })

  it('should render with a category button called "Bug"', () => {
    render(<BoardFiltersCard />)

    const childElement = screen.getByText('Bug')

    expect(childElement).toHaveClass('category-button')
  })

  it('should render with a category button called "Feature"', () => {
    render(<BoardFiltersCard />)

    const childElement = screen.getByText('Feature')

    expect(childElement).toHaveClass('category-button')
  })

  it('should render with container class for elements', () => {
    render(<BoardFiltersCard />)

    const childElement = screen.getByText('All')

    expect(childElement.parentElement).toHaveClass('board-filters-card_container')
  })
})