import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../Home'

describe('Home', () => {
  it('should render header with default class', () => {
    render(<Home />)

    const header = screen.getByRole('banner')

    expect(header).toHaveClass('home_header')
  })
})