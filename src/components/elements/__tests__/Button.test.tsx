import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Button, { ButtonActionType } from '../Button'

describe('Button', () => {
  it('should render a button element', () => {
    render(<Button>Demo</Button>)

    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toBeInTheDocument()
  })

  it('should render the provided type of button', () => {
    render(<Button actionType={ButtonActionType.ADD}>Demo</Button>)

    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toHaveClass(ButtonActionType.ADD)
  })

  it('should render with the provided children', () => {
    const children = 'Demo'
    render(<Button>{children}</Button>)

    const buttonElement = screen.getByRole('button', { name: children })

    expect(buttonElement).toBeInTheDocument()
  })
})