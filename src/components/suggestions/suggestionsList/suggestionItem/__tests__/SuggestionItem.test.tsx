import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SuggestionItem from '../SuggestionItem'
import { Category, ProductRequest, User } from '../../SuggestionsList.d'
import { capitalizeFirstLetter } from '../../../../../utils/global'

describe('<SuggestionItem />', () => {
  const mockData: ProductRequest = {
    id: 1,
    category: Category.Feature,
    description: 'asd',
    status: 'planned',
    title: 'Add tags for solutions',
    upvotes: 112,
    comments: [
      {
        id: 1,
        content: 'asd',
        user: {} as User,
      },
      {
        id: 2,
        content: 'sas',
        user: {} as User,
      }
    ],
  }

  it('should render a heading with the provided title', () => {
    render(<SuggestionItem {...mockData} />)

    expect(screen.queryByRole('heading', { name: mockData.title })).toBeInTheDocument()
  })

  it('should render a paragraph with the provided description', () => {
    render(<SuggestionItem {...mockData} />)

    expect(screen.queryByText(mockData.description)).toBeInTheDocument()
  })

  it('should render a button with the provided category', () => {
    render(<SuggestionItem {...mockData} />)

    expect(screen.queryByRole('button', { name: capitalizeFirstLetter(mockData.category) }))
  })

  it('should render a button with the provided upvotes', () => {
    render(<SuggestionItem {...mockData} />)

    expect(screen.queryByText(mockData.upvotes)).toBeInTheDocument()
  })

  describe('test comments count', () => {
    it('should render the amount of comments of provided', () => {
      render(<SuggestionItem {...mockData} />)

      expect(screen.queryByText(mockData.comments?.length ?? 0)).toBeInTheDocument()
    })

    it('should render the value 0 when there are no comments', () => {
      const _mockData = {...mockData}
      _mockData.comments = []

      render(<SuggestionItem {..._mockData} />)

      expect(screen.queryByText(0)).toBeInTheDocument()
    })
  })
})