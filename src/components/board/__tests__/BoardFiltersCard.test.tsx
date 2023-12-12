import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import BoardFiltersCard from '../BoardFiltersCard'
import userEvent from '@testing-library/user-event'
import SuggestionsProvider from '../../../store/SuggestionsProvider'

describe('BoardFiltersCard', () => {
  it('should render with default active category button called "All"', () => {
    render(
      <SuggestionsProvider>
        <BoardFiltersCard categories={[]} />
      </SuggestionsProvider>
    )

    const childElement = screen.getByText('All')

    expect(childElement).toBeInTheDocument()
    expect(childElement).toHaveClass('category-button--active')
  })

  it('should render with provided categories', () => {
    const categories = [
      { categoryName: 'Category 1' },
      { categoryName: 'Category 2' },
      { categoryName: 'Category 3' },
    ]

    render(
      <SuggestionsProvider>
        <BoardFiltersCard categories={categories} />
      </SuggestionsProvider>
    )

    expect(screen.getByRole('button', { name: categories[0].categoryName })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: categories[1].categoryName })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: categories[2].categoryName })).toBeInTheDocument()
  })

  // TODO: Ask Ronald about tests with CONTEXT
  it.skip('should render only one active category button at a time', async () => {
    const categories = [
      { categoryName: 'Category 1' },
    ]

    render(
      <SuggestionsProvider>
        <BoardFiltersCard categories={categories} />
      </SuggestionsProvider>
    )

    const categoryButton1 = screen.getByRole('button', { name: /all/i })
    const categoryButton2 = screen.getByRole('button', { name: categories[0].categoryName })

    expect(categoryButton1).toHaveClass('category-button--active')
    expect(categoryButton2).not.toHaveClass('category-button--active')

    await userEvent.click(categoryButton2)

    expect(categoryButton1).not.toHaveClass('category-button--active')
    expect(categoryButton2).toHaveClass('category-button--active')
  })
})