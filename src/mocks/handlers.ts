import { http, HttpResponse } from 'msw'
import { FeedbackResponse } from '../components/suggestions/suggestionsList/SuggestionsList.d'
import data from '../models/feedbackData.json'

export const handlers = [
  http.get('https://frontendmentor.com/getFeedback', () => {
    return HttpResponse.json<FeedbackResponse>(data as FeedbackResponse)
  }),
  http.get('https://frontendmentor.com/getCategories', () => {
    return HttpResponse.json<{ categoryName: string }[]>([
      { categoryName: 'UI' },
      { categoryName: 'UX' },
      { categoryName: 'enhancement' },
      { categoryName: 'bug' },
      { categoryName: 'feature' }
    ])
  }),
  http.get('https://frontendmentor.com/getStatuses', () => {
    return HttpResponse.json<{ statusName: string }[]>([
      { statusName: 'planned' },
      { statusName: 'suggestion' },
      { statusName: 'live' },
      { statusName: 'in-progress' }
    ])
  }),
]