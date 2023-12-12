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
            <ManageSuggestion isNewMode={true} />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByRole('heading', { level: 1, name: 'Create New Feedback' })).toBeInTheDocument()
    })

    it('should not render "Status" dropdown control', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion isNewMode={true} />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.queryByLabelText('Update Status')).not.toBeInTheDocument()
    })

    it('should not render "Delete" button', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion isNewMode={true} />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.queryByRole('button', { name: /delete/i })).not.toBeInTheDocument()
    })

    it('should render "Add Feedback" button', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion isNewMode={true} />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByRole('button', { name: /add feedback/i })).toBeInTheDocument()
    })
  })

  describe('edit', () => {
    it('should render the heading with text "Editing"', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion isNewMode={false} />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByRole('heading', { level: 1, name: /editing/i })).toBeInTheDocument()
    })

    it('should render "Status" dropdown control', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion isNewMode={false} />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByLabelText('Update Status')).toBeInTheDocument()
    })

    it('should render "Delete" button', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion isNewMode={false} />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
    })

    it('should render "Save Changes" button', () => {
      render(
        <BrowserRouter>
          <SuggestionsProvider>
            <ManageSuggestion isNewMode={false} />
          </SuggestionsProvider>
        </BrowserRouter>
      )

      expect(screen.getByRole('button', { name: /save changes/i })).toBeInTheDocument()
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
  })
})