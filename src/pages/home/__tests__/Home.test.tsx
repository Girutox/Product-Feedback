import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../Home'

describe('Home', () => {
  it('should render a level 2 heading with the text "Frontend Mentor"', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 2, name: /frontend mentor/i })

    expect(heading).toBeInTheDocument()
  })

  it('should render a level 3 heading with the text "Feedback Board"', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 3, name: /feedback board/i })

    expect(heading).toBeInTheDocument()
  })

  it('should render a welcome card with their default class', () => {
    const { container } = render(<Home />)

    const div = container.querySelector('.home_welcome-card')

    expect(div).not.toBeNull()
  })
})