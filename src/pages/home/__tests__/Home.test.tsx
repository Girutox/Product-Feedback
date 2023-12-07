import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../Home'
import { BrowserRouter } from 'react-router-dom'

describe('Home', () => {
  it('should render header with default class', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    const header = screen.getByRole('banner')

    expect(header).toHaveClass('home_header')
  })

  it('should render with 3 main cards (welcome, filters and roadmap)', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(container.querySelector('.board-welcome-card_container')).not.toBeNull()
    expect(container.querySelector('.board-filters-card_container')).not.toBeNull()
    expect(container.querySelector('.board-roadmap-card_heading')).not.toBeNull()
  })
})