import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Input from '../Input'

describe('Input', () => {
  it('should render control with provided props', () => {
    render(<Input type='text' label='title' />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})