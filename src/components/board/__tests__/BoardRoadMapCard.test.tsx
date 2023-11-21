import { describe, it, expect } from 'vitest'
import BoardRoadMapCard from '../BoardRoadMapCard'
import { render, screen } from '@testing-library/react'

describe('BoardRoadMapCard', () => {
  it('should render with "View" anchor', () => {
    render(<BoardRoadMapCard />)

    expect(screen.getByRole('link', { name: 'View' })).toBeInTheDocument()
  })

  it('should render with "Roadmap" heading', () => {
    render(<BoardRoadMapCard />)

    expect(screen.getByRole('heading', { level: 3, name: 'Roadmap' })).toBeInTheDocument()
  })
})