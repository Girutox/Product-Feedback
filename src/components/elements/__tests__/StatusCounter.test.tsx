import { describe, it, expect } from 'vitest'
import StatusCounter from '../StatusCounter'
import { render, screen } from '@testing-library/react'
import { CIRCLE_BACKGROUND_VARIANTS } from '../../../models/statusCounter'
import { capitalizeFirstLetter } from '../../../utils/global'

const circleBackgroundVariants = {
  [CIRCLE_BACKGROUND_VARIANTS.planned]: 'bg-marker',
  [CIRCLE_BACKGROUND_VARIANTS['in-progress']]: 'bg-primary',
  [CIRCLE_BACKGROUND_VARIANTS.live]: 'bg-marker-light'
}

describe('StatusCounter', () => {
  it('should render with provided status', () => {
    const status = CIRCLE_BACKGROUND_VARIANTS.planned

    render(<StatusCounter status={status} count={0} />)

    expect(screen.getByText(capitalizeFirstLetter(status))).toBeInTheDocument()
  })

  it('should render with matching circle background variant', () => {
    const status = CIRCLE_BACKGROUND_VARIANTS.planned

    render(<StatusCounter status={status} count={0} />)

    expect(screen.getByText(capitalizeFirstLetter(status)).parentElement?.querySelector('.status-counter_list-item_circle')).toHaveClass(circleBackgroundVariants[status])
  })

  it('should render with provided number', () => {
    const status = CIRCLE_BACKGROUND_VARIANTS.planned
    const number = 1

    render(<StatusCounter status={status} count={number} />)

    expect(screen.getByText(number.toString())).toBeInTheDocument()
  })

})