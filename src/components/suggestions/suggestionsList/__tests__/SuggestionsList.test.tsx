import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SuggestionsList from '../SuggestionsList'
import { ProductRequest, SortByItem } from '../SuggestionsList.d'
import { capitalizeFirstLetter } from '../../../../utils/global'
import { BrowserRouter } from 'react-router-dom'

describe('SuggestionsList', () => {
  const mockData: ProductRequest[] = [
    {
      'id': 1,
      'title': 'Add tags for solutions',
      'category': 'enhancement',
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
    {
      'id': 2,
      'title': 'DEMO TITLE',
      'category': 'bug',
      'upvotes': 45,
      'status': 'planned',
      'description': 'DEMO DESC',
      'comments': []
    },
  ]

  it('should render all items when data is provided and filter is "all"', async () => {
    render(
      <BrowserRouter>
        <SuggestionsList data={mockData} selectedCategoryFilter='all' sortByValue={SortByItem.MostUpvotes} />
      </BrowserRouter>
    )

    mockData.forEach((item) => {
      const title = screen.getByText(item.title)
      const description = screen.getByText(item.description)
      const category = screen.getByText(capitalizeFirstLetter(item.category))
      const upvotes = screen.getByText(item.upvotes.toString())
      const commentsCounter = screen.getByText(item.comments?.length.toString() ?? '0')

      expect(title).toBeInTheDocument()
      expect(description).toBeInTheDocument()
      expect(category).toBeInTheDocument()
      expect(upvotes).toBeInTheDocument()
      expect(commentsCounter).toBeInTheDocument()
    })
  })

  it('should render only selected items to be filtered', async () => {
    render(
      <BrowserRouter>
        <SuggestionsList data={mockData} selectedCategoryFilter={'enhancement'} sortByValue={SortByItem.MostUpvotes} />
      </BrowserRouter>
    )

    const activeTitle = screen.getByText(mockData[0].title)
    const inactiveTitle = screen.queryByText(mockData[1].title)

    expect(activeTitle).toBeInTheDocument()
    expect(inactiveTitle).not.toBeInTheDocument()
  })

  it('should render default content when no data is provided', async () => {
    render(
      <BrowserRouter>
        <SuggestionsList data={[]} selectedCategoryFilter='All' sortByValue={SortByItem.MostUpvotes} />
      </BrowserRouter>
    )

    const title = await screen.findByText(/there is no feedback yet/i)
    const message = await screen.findByText(/got a suggestion/i)
    const buttton = await screen.findByRole('button', { name: '+ Add Feedback' })

    expect(title).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(buttton).toBeInTheDocument()
  })
})