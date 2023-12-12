import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ManageSuggestion from '../ManageSuggestion'
import { BrowserRouter } from 'react-router-dom'
import SuggestionsProvider from '../../../store/SuggestionsProvider'

describe('ManageSuggestion', () => {
  describe('new', () => {
    it('should render the heading with text "Create New Feedback"', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByRole('heading', { level: 1, name: 'Create New Feedback' })).toBeInTheDocument()
    })
  })

  describe('common', () => {
    it('should render a link with the name "Go back"', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByText('Go back')).toBeInTheDocument()
    })

    it('should render "Feedback Title" input control', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByLabelText('Feedback Title')).toBeInTheDocument()
    })

    it('should render "Category" dropdown control', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByLabelText('Category')).toBeInTheDocument()
    })

    it('should render "FeedBack Detail" textarea control', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByLabelText('Feedback Detail')).toBeInTheDocument()
    })

    it('should render "Cancel" button', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument()
    })

    it('should render "Add Feedback" button', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByRole('button', { name: /add feedback/i })).toBeInTheDocument()
    })
  })
})