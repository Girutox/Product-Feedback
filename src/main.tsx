import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './assets/styles/index.scss'

async function deferRender() {
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
  )
})
