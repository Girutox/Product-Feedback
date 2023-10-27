import { describe, it, expect } from 'vitest'
import StatusCounter from '../StatusCounter'
import { render, screen } from '@testing-library/react'
import { CIRCLE_BACKGROUND_VARIANTS } from '../../../models/statusCounter'

const circleBackgroundVariants = {
  [CIRCLE_BACKGROUND_VARIANTS.PLANNED]: 'bg-marker',
  [CIRCLE_BACKGROUND_VARIANTS.INPROGRESS]: 'bg-primary',
  [CIRCLE_BACKGROUND_VARIANTS.LIVE]: 'bg-marker-light'
}

describe('StatusCounter', () => {
  it('should render with provided status', () => {
    const status = CIRCLE_BACKGROUND_VARIANTS.PLANNED

    render(<StatusCounter status={status} count={0} />)

    expect(screen.getByText(status)).toBeInTheDocument()
  })

  it('should render provided status with default text class', () => {
    const status = CIRCLE_BACKGROUND_VARIANTS.PLANNED

    render(<StatusCounter status={status} count={0} />)

    expect(screen.getByText(status)).toHaveClass('status-counter_list-item_text')
  })

  it('should render status item with default container class', () => {
    const status = CIRCLE_BACKGROUND_VARIANTS.PLANNED

    render(<StatusCounter status={status} count={0} />)

    expect(screen.getByText(status).parentElement).toHaveClass('status-counter_list-item')
  })

  it('should render with "circle" container for status item', () => {
    const status = CIRCLE_BACKGROUND_VARIANTS.PLANNED

    render(<StatusCounter status={status} count={0} />)

    expect(screen.getByText(status).parentElement?.querySelector('.status-counter_list-item_circle')).not.toBeNull()
  })

  it('should render with matching circle background variant', () => {
    const status = CIRCLE_BACKGROUND_VARIANTS.PLANNED

    render(<StatusCounter status={status} count={0} />)

    expect(screen.getByText(status).parentElement?.querySelector('.status-counter_list-item_circle')).toHaveClass(circleBackgroundVariants[status])
  })

  it('should render with provided number', () => {
    const status = CIRCLE_BACKGROUND_VARIANTS.PLANNED
    const number = 1

    render(<StatusCounter status={status} count={number} />)

    expect(screen.getByText(number.toString())).toBeInTheDocument()
  })

  it('should render with default container class', () => {
    const status = CIRCLE_BACKGROUND_VARIANTS.PLANNED

    render(<StatusCounter status={status} count={0} />)

    expect(screen.getByText(status).parentElement?.parentElement).toHaveClass('status-counter_container')
  })
})