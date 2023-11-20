import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../Home'

describe('Home', () => {
  describe('Header', () => {
    describe('Welcome card', () => {
      it('should render a level 2 heading with the text "Frontend Mentor"', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', { level: 2, name: /frontend mentor/i })

        expect(heading).toBeInTheDocument()
      })

      it('should render a level 3 heading with the text "Feedback Board"', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', { level: 3, name: /feedback board/i })

        expect(heading).toBeInTheDocument()
      })

      it('should render a welcome card with their default class', () => {
        const { container } = render(<Home />)

        const div = container.querySelector('.board-welcome-card_container')

        expect(div).not.toBeNull()
      })
    })

    describe('Filter card', () => {
      it('should render provided filter options', () => {
        render(<Home />)

        const buttonsArray = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

        buttonsArray.forEach(button => {
          const buttonElement = screen.getByRole('button', { name: button })

          expect(buttonElement).toBeInTheDocument()
        })
      })

      // it('should render a button with the text "All"', () => {
      //   render(<Home />)

      //   const button = screen.getByRole('button', { name: /all/i })

      //   expect(button).toBeInTheDocument()
      // })

      // it('should render a button with the text "UI"', () => {
      //   render(<Home />)

      //   const button = screen.getByRole('button', { name: /ui/i })

      //   expect(button).toBeInTheDocument()
      // })

      // it('should render a button with the text "UX"', () => {
      //   render(<Home />)

      //   const button = screen.getByRole('button', { name: /ux/i })

      //   expect(button).toBeInTheDocument()
      // })
    })

    describe('Roadmap', () => {
      it('should render a level 3 heading with the text "Roadmap"', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', { level: 3, name: /roadmap/i })

        expect(heading).toBeInTheDocument()
      })

      it('should render a link with the text "View"', () => {
        render(<Home />)

        const link = screen.getByRole('link', { name: /view/i })

        expect(link).toBeInTheDocument()
      })

      it('should render a unordered list with the provided items', () => {
        render(<Home />)

        const listItems = [
          { description: 'Planned', count: 2 },
          { description: 'In-Progress', count: 3 },
          { description: 'Live', count: 1 }]

        listItems.forEach(item => {
          const listItem = screen.getByText(item.description)
          const count = screen.getByText(item.count)

          expect(listItem).toBeInTheDocument()
          expect(count).toBeInTheDocument()
        })
      })
    })
  })

  describe('Main', () => {
    describe('Toolbar', () => {
      it('should render the count of suggestions', () => {
        render(<Home />)

        const suggestionsArray = ['Add tag', 'Add a dark', 'Q&A within', 'Allow image']
        const count = screen.getByText(`${suggestionsArray.length} Suggestions`)

        expect(count).toBeInTheDocument()
      })
    })

    describe.skip('Grid', () => {

    })
  })
})