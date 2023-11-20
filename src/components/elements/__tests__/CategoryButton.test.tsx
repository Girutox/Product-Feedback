import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import CategoryButton from '../CategoryButton'

describe('CategoryButton', () => {
  it('should activate the button when clicked', async () => {
    render(<CategoryButton>All</CategoryButton>)

    const button = screen.getByRole('button', { name: /all/i })

    await userEvent.click(button)

    expect(button).toHaveClass('category-button--active')
  })
})