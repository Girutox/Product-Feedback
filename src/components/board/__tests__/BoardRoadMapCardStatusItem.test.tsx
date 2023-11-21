import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BoardRoadMapCardStatusItem from '../BoardRoadMapCardStatusItem'
import { filterGroupBy } from '../../../utils/filterGroupBy'
import { Category, ProductRequest } from '../../suggestions/suggestionsList/SuggestionsList.d'
import { capitalizeFirstLetter } from '../../../utils/global'

describe.skip('BoardRoadMapCardStatusItem', () => {
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
  ]
  
  // TODO: Complete this
})