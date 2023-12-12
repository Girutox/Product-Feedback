import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Dropdown from '../Dropdown'

describe('Dropdown', () => {
  it('should render control with provided props', () => {
    render(<Dropdown options={[]} label={'category'} />)

    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('should render control with provided options', () => {
    const options = [
      { value: '1', label: 'One' },
      { value: '2', label: 'Two' }
    ]

    render(<Dropdown options={options} label={'category'} />)

    expect(screen.getByRole('option', { name: 'One' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Two' })).toBeInTheDocument()
  })
})