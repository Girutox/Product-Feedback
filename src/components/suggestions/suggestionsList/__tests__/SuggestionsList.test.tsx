import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SuggestionsList from '../SuggestionsList'
import { Category, ProductRequest } from '../SuggestionsList.d'

describe('SuggestionsList', () => {
  const mockData: ProductRequest[] = [
    {
      'id': 1,
      'title': 'Add tags for solutions',
      'category': Category.Enhancement,
      'upvotes': 112,
      'status': 'suggestion',
      'description': 'Easier to search for solutions based on a specific stack.',
      'comments': [
        {
          'id': 1,
          'content': 'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
          'user': {
            'image': './assets/user-images/image-suzanne.jpg',
            'name': 'Suzanne Chang',
            'username': 'upbeat1811'
          }
        },
        {
          'id': 2,
          'content': 'Please use fun, color-coded labels to easily identify them at a glance',
          'user': {
            'image': './assets/user-images/image-thomas.jpg',
            'name': 'Thomas Hood',
            'username': 'brawnybrave'
          }
        }
      ]
    },
  ]
  
  it('should render items when data is provided', async () => {
    render(<SuggestionsList data={mockData} />)

    const items = await screen.findAllByLabelText(/suggestion item/i)

    expect(items.length).toBeGreaterThan(0)
  })

  it ('should render default content when no data is provided', async () => {
    render(<SuggestionsList data={[]} />)

    const title = await screen.findByText(/there is no feedback yet/i)
    const message = await screen.findByText(/got a suggestion/i)
    const buttton = await screen.findByRole('button', { name: '+ Add Feedback' })

    expect(title).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(buttton).toBeInTheDocument()
  })
})