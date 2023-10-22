import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import DefaultCard from '../DefaultCard'
import { BACKGROUND_VARIANTS } from '../../../models/defaultCard'

// TODO: Ask Ronald about this "constants" pattern
const backgroundVariants = {
  [BACKGROUND_VARIANTS.DEFAULT]: 'bg-white',
  [BACKGROUND_VARIANTS.FADED]: 'bg-custom-faded'
}

describe('DefaultCard', () => {
  it('should render with child element', () => {
    render(<DefaultCard>
      <div>Test</div>
    </DefaultCard>)

    const childElement = screen.getByText('Test')

    expect(childElement).toBeInTheDocument()
  })
  
  it('should render with default container class', () => {
    render(<DefaultCard>
      <div>Test</div>
    </DefaultCard>)

    const childElement = screen.getByText('Test')

    expect(childElement.parentElement).toHaveClass('default-card_container')
  })

  it('should render with default background variant if not provided', () => {
    render(<DefaultCard>
      <div>Test</div>
    </DefaultCard>)

    const childElement = screen.getByText('Test')

    expect(childElement.parentElement).toHaveClass(backgroundVariants[BACKGROUND_VARIANTS.DEFAULT])
  })

  it('should render with matching background variant if provided', () => {
    const backgroundVariant = BACKGROUND_VARIANTS.DEFAULT

    render(<DefaultCard backgroundVariant={backgroundVariant}>
      <div>Test</div>
    </DefaultCard>)

    const childElement = screen.getByText('Test')

    expect(childElement.parentElement).toHaveClass(backgroundVariants[backgroundVariant])
  })
})