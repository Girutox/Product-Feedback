import { describe, it, expect } from 'vitest'
import BoardRoadMapCard from '../BoardRoadMapCard'
import { render, screen } from '@testing-library/react'

describe('BoardRoadMapCard', () => {
  it('should render with heading section', () => {
    render(<BoardRoadMapCard />)

    const headingElement = screen.getByRole('heading', { level: 3, name: 'Roadmap' })
    expect(headingElement.parentElement).toHaveClass('board-roadmap-card_heading')
  })

  it('should render with "View" anchor', () => {
    render(<BoardRoadMapCard />)

    expect(screen.getByRole('link', { name: 'View' })).toBeInTheDocument()
  })

  it('should render with "Roadmap" heading', () => {
    render(<BoardRoadMapCard />)

    expect(screen.getByRole('heading', { level: 3, name: 'Roadmap' })).toBeInTheDocument()
  })

  it('should render with "status counter" item', () => {
    render(<BoardRoadMapCard />)

    const statusItem = screen.getByText('Planned')

    expect(statusItem).toBeInTheDocument()
    expect(statusItem.parentElement?.parentElement).toHaveClass('status-counter_container')
  })

  it('should render with items section', () => {
    render(<BoardRoadMapCard />)

    const statusItem = screen.getByText('Planned')

    expect(statusItem.parentElement?.parentElement?.parentElement).toHaveClass('board-roadmap-card_items')
  })
})