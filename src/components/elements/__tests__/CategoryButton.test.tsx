import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CategoryButton from '../CategoryButton'

describe('CategoryButton', () => {
  it('should render with specified text', () => {
    const text = 'All'

    render(<CategoryButton text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should render with default class', () => {
    const text = 'All'

    render(<CategoryButton text={text} />)

    expect(screen.getByText(text)).toHaveClass('category-button')
  })

  it('should render with active class when isActive prop is true', () => {
    const text = 'All'

    render(<CategoryButton text={text} isActive />)

    expect(screen.getByText(text)).toHaveClass('category-button--active')
  })

  it('should render without active class when isActive prop is false', () => {
    const text = 'All'

    render(<CategoryButton text={text} isActive={false} />)

    expect(screen.getByText(text)).not.toHaveClass('category-button--active')
  })
})