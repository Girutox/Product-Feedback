import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SuggestionItem from '../SuggestionItem'
import { ProductRequest, User } from '../../SuggestionsList.d'
import { BrowserRouter } from 'react-router-dom'

const suggestion: ProductRequest = {
  id: 1,
  title: 'Test title',
  category: 'enhancement',
  upvotes: 5,
  status: 'Test status',
  description: 'Test description',
  comments: [
    {
      id: 1,
      content: 'Test comment',
      user: {} as User,
    },
  ],
}

describe('SuggestionItem', () => {
  it('should render provided item', () => {
    render(
      <BrowserRouter>
        <SuggestionItem {...suggestion} />
      </BrowserRouter>
    )

    const title = screen.getByRole('heading', { level: 3, name: `${suggestion.title}` })
    const description = screen.getByText(`${suggestion.description}`)
    const categoryButton = screen.getByRole('button', { name: RegExp(`${suggestion.category}`, 'i') })
    const upvoteButton = screen.getByText(suggestion.upvotes.toString())
    const commentsCounter = screen.getByText(`${suggestion.comments?.length ?? 0}`)

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(categoryButton).toBeInTheDocument()
    expect(upvoteButton).toBeInTheDocument()
    expect(commentsCounter).toBeInTheDocument()
  })
})