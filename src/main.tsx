import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './assets/styles/index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ManageSuggestion from './pages/manageSuggestion/ManageSuggestion.tsx'

async function deferRender() {
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/manageFeedBack',
    element: <ManageSuggestion />
  },
])

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
  )
})
