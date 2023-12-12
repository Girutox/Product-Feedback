import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BoardRoadMapCardStatusItem from '../BoardRoadMapCardStatusItem'
import { filterGroupBy } from '../../../utils/filterGroupBy'
import { ProductRequest } from '../../suggestions/suggestionsList/SuggestionsList.d'
import { capitalizeFirstLetter } from '../../../utils/global'

describe('BoardRoadMapCardStatusItem', () => {
  const mockData: ProductRequest[] = [
    {
      'id': 1,
      'title': 'Add tags for solutions',
      'category': 'feature',
      'upvotes': 112,
      'status': 'suggestion',
      'description': 'Easier to search for solutions based on a specific stack.',
    },
    {
      'id': 2,
      'title': 'Add a dark theme option',
      'category': 'feature',
      'upvotes': 99,
      'status': 'suggestion',
      'description': 'It would help people with light sensitivities and who prefer dark mode.',
    },
    {
      'id': 3,
      'title': 'Q&A within the challenge hubs',
      'category': 'feature',
      'upvotes': 65,
      'status': 'suggestion',
      'description': 'Challenge-specific Q&A would make for easy reference.',
    },
    {
      'id': 7,
      'title': 'More comprehensive reports',
      'category': 'feature',
      'upvotes': 123,
      'status': 'planned',
      'description': 'It would be great to see a more detailed breakdown of solutions.',
    },
    {
      'id': 8,
      'title': 'Learning paths',
      'category': 'feature',
      'upvotes': 28,
      'status': 'planned',
      'description': 'Sequenced projects for different goals to help people improve.',
    },
    {
      'id': 9,
      'title': 'One-click portfolio generation',
      'category': 'feature',
      'upvotes': 62,
      'status': 'in-progress',
      'description': 'Add ability to create professional looking portfolio from profile.',
    },
  ]
  
  it('should render with "status count" items based on suggestions data', async () => {
    const groups = filterGroupBy(mockData)

    render(<BoardRoadMapCardStatusItem groups={groups} />)

    groups.forEach(group => {
      expect(screen.getByText(capitalizeFirstLetter(group.status))).toBeInTheDocument()
      expect(screen.getByText(group.count.toString())).toBeInTheDocument()
    })
  })
})