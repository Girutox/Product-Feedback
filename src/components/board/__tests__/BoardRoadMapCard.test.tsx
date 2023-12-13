import { describe, it, expect } from 'vitest'
import BoardRoadMapCard from '../BoardRoadMapCard'
import { render, screen } from '@testing-library/react'
import SuggestionsProvider from '../../../store/SuggestionsProvider'

describe('BoardRoadMapCard', () => {
  it('should render with "View" anchor', () => {
    render(
      <SuggestionsProvider>
        <BoardRoadMapCard />
      </SuggestionsProvider>
    )

    expect(screen.getByRole('link', { name: 'View' })).toBeInTheDocument()
  })

  it('should render with "Roadmap" heading', () => {
    render(
      <SuggestionsProvider>
        <BoardRoadMapCard />
      </SuggestionsProvider>
    )

    expect(screen.getByRole('heading', { level: 3, name: 'Roadmap' })).toBeInTheDocument()
  })

  it.skip('should render "No data found" when suggestion array is empty', () => {
    render(
      <SuggestionsProvider>
        <BoardRoadMapCard />
      </SuggestionsProvider>
    )

    expect(screen.getByText('No data found')).toBeInTheDocument()
  })
})