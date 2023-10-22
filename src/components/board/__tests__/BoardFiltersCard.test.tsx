import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import BoardFiltersCard from '../BoardFiltersCard'

describe('BoardFiltersCard', () => {
  it('should render the component with default card', () => {
    const { container } = render(<BoardFiltersCard />)

    expect(container).toBeTruthy()
  })
})