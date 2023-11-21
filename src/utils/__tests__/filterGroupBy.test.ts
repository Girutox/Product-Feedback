import { describe, it, expect } from 'vitest'
import { FilterGroupBy, filterGroupBy } from '../filterGroupBy'
import { Category, ProductRequest } from '../../components/suggestions/suggestionsList/SuggestionsList.d'

describe('filterGroupBy', async () => {
  const mockData: ProductRequest[] = [
    {
      'id': 1,
      'title': 'Add tags for solutions',
      'category': Category.Feature,
      'upvotes': 112,
      'status': 'suggestion',
      'description': 'Easier to search for solutions based on a specific stack.',
    },
    {
      'id': 2,
      'title': 'Add a dark theme option',
      'category': Category.Feature,
      'upvotes': 99,
      'status': 'suggestion',
      'description': 'It would help people with light sensitivities and who prefer dark mode.',
    },
    {
      'id': 3,
      'title': 'Q&A within the challenge hubs',
      'category': Category.Feature,
      'upvotes': 65,
      'status': 'suggestion',
      'description': 'Challenge-specific Q&A would make for easy reference.',
    },
    {
      'id': 7,
      'title': 'More comprehensive reports',
      'category': Category.Feature,
      'upvotes': 123,
      'status': 'planned',
      'description': 'It would be great to see a more detailed breakdown of solutions.',
    },
    {
      'id': 8,
      'title': 'Learning paths',
      'category': Category.Feature,
      'upvotes': 28,
      'status': 'planned',
      'description': 'Sequenced projects for different goals to help people improve.',
    },
    {
      'id': 9,
      'title': 'One-click portfolio generation',
      'category': Category.Feature,
      'upvotes': 62,
      'status': 'in-progress',
      'description': 'Add ability to create professional looking portfolio from profile.',
    },
    {
      'id': 10,
      'title': 'Bookmark challenges',
      'category': Category.Feature,
      'upvotes': 31,
      'status': 'in-progress',
      'description': 'Be able to bookmark challenges to take later on.',
    },
    {
      'id': 11,
      'title': 'Animated solution screenshots',
      'category': Category.Feature,
      'upvotes': 9,
      'status': 'in-progress',
      'description': 'Screenshots of solutions with animations don’t display correctly.'
    },
    {
      'id': 12,
      'title': 'Add micro-interactions',
      'category': Category.Feature,
      'upvotes': 71,
      'status': 'live',
      'description': 'Small animations at specific points can add delight.',
      'comments': []
    }
  ]
  
  it('should return an array of objects grouped by status', async () => {
    const suggestions = mockData

    const expectedObject: FilterGroupBy[] = [
      {
        status: 'suggestion',
        count: 3
      },
      {
        status: 'planned',
        count: 2
      },
      {
        status: 'in-progress',
        count: 3
      },
      {
        status: 'live',
        count: 1
      }      
    ]

    const output = filterGroupBy(suggestions)

    expect(output).toStrictEqual(expectedObject)
  })
})