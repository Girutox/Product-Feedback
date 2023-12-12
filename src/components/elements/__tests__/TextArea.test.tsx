import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TextArea from '../TextArea'

describe('TextArea', () => {
  it('should render control with provided props', () => {
    render(<TextArea label='feedbackDetail'/>)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})