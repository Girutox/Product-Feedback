import { http, HttpResponse } from 'msw'
import { FeedbackResponse } from '../components/suggestions/suggestionsList/SuggestionsList.d'
import data from '../models/feedbackData.json'

export const handlers = [
  http.get('https://frontendmentor.com/getFeedback', () => {
    return HttpResponse.json<FeedbackResponse>(data as FeedbackResponse)
  }),
]