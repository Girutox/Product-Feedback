import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Input from '../Input'

describe('Input', () => {
  it('should render with provided label', () => {
    const label = 'Test Label'

    render(<Input label="Test Label" type='text' id='title' name='title' />)
    expect(screen.getByLabelText(label)).toBeInTheDocument()
  })

  it('should render with provided subtitle', () => {
    const subtitle = 'Test Sub'

    render(<Input label="Feedback Title" subtitle={subtitle} type='text' id='title' name='title' />)
    expect(screen.getByText(subtitle)).toBeInTheDocument()
  })
})