import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
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

  it('should have "disabled class" if "disabled" prop is true', () => {
    const text = 'Enhancement'

    render(<CategoryButton disabled>{text}</CategoryButton>)

    const button = screen.getByRole('button', { name: text })

    expect(button).toHaveClass('category-button--disabled')
  })

  it('should not have "disabled class" if "disabled" prop is false', () => {
    const text = 'Enhancement'

    render(<CategoryButton disabled={false}>{text}</CategoryButton>)

    const button = screen.getByRole('button', { name: text })

    expect(button).not.toHaveClass('category-button--disabled')
  })
})