import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FormControl from '../FormControl'

describe('FormControl', () => {
  it('render provided label', () => {
    render(
      <FormControl label='Test' id='test'>
        DEMO
      </FormControl>
    )

    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})