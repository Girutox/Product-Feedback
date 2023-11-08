import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import CategoryButton from '../CategoryButton'

describe('CategoryButton', () => {
  it('should render with specified text', () => {
    const text = 'All'

    render(<CategoryButton>{text}</CategoryButton>)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should render with default class', () => {
    const text = 'All'

    render(<CategoryButton>{text}</CategoryButton>)

    expect(screen.getByText(text)).toHaveClass('category-button')
  })

  it('should render with active class when isActive prop is true', () => {
    const text = 'All'

    render(<CategoryButton isActive={true}>{text}</CategoryButton>)

    expect(screen.getByText(text)).toHaveClass('category-button--active')
  })

  it('should render without active class when isActive prop is false', () => {
    const text = 'All'

    render(<CategoryButton isActive={false}>{text}</CategoryButton>)

    expect(screen.getByText(text)).not.toHaveClass('category-button--active')
  })

  it('should set the active class when clicked', async () => {
    const text = 'All'

    render(<CategoryButton>{text}</CategoryButton>)

    expect(screen.getByText(text)).not.toHaveClass('category-button--active')
    await userEvent.click(screen.getByText(text))
    expect(screen.getByText(text)).toHaveClass('category-button--active')
  })
})