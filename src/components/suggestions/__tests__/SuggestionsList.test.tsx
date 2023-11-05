import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SuggestionsList from '../suggestionsList/SuggestionsList'
import { Category, ProductRequest } from '../suggestionsList/SuggestionsList.d'

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

describe('SuggestionsList', () => {
  it('should render items when data is provided', async () => {
    render(<SuggestionsList data={mockData} />)

    const items = await screen.findAllByLabelText(/suggestion item/i)

    expect(items.length).toBeGreaterThan(0)
  })

  it ('should render "no suggestions found" message when no data is provided', async () => {
    render(<SuggestionsList data={[]} />)

    const message = await screen.findByText(/no suggestions found/i)

    expect(message).toBeInTheDocument()
  })
})