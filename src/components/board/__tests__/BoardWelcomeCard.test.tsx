import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import BoardWelcomeCard from '../BoardWelcomeCard'

describe('BoardWelcomeCard', () => {
  it('should render with title and subtitle headings', () => {
    render(<BoardWelcomeCard />)

    expect(screen.getByRole('heading', { name: 'Frontend Mentor', level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Feedback Board', level: 4 })).toBeInTheDocument()
  })

  it('should render with default card class', () => {
    render(<BoardWelcomeCard />)

    const childElement = screen.getByRole('heading', { name: 'Frontend Mentor', level: 2 })

    expect(childElement.parentElement?.parentElement?.parentElement).toHaveClass('default-card_container')
  })

  it('should render with custom card container class', () => {
    render(<BoardWelcomeCard />)

    const childElement = screen.getByRole('heading', { name: 'Frontend Mentor', level: 2 })

    expect(childElement.parentElement?.parentElement).toHaveClass('board-welcome-card_container')
  })

  // it('should render hamburguer icon/option', () => {
  //   render(<BoardWelcomeCard />)

  //   const childElement = screen.getByRole('heading', { name: 'Frontend Mentor', level: 2 })

  //   expect(childElement.parentElement).toHaveClass('default-card_container')
  // })
})
