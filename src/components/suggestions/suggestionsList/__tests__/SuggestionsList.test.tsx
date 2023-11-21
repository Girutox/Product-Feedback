import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SuggestionsList from '../SuggestionsList'
import { Category, ProductRequest } from '../SuggestionsList.d'

describe.skip('SuggestionsList', () => {
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

  // TODO: Complete this
})