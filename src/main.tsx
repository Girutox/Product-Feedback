import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ManageSuggestion from './pages/manageSuggestion/ManageSuggestion.tsx'
import SuggestionsProvider from './store/SuggestionsProvider.tsx'
import Home from './pages/home/Home.tsx'

import './assets/styles/index.scss'

async function deferRender() {
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <SuggestionsProvider><Home /></SuggestionsProvider>
  },
  {
    path: '/manageFeedBack',
    element: <SuggestionsProvider><ManageSuggestion /></SuggestionsProvider>
  },
])

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
  )
})
