import Home from './pages/home/Home'

import './App.css'
import SuggestionsProvider from './store/SuggestionsProvider'

function App() {
  return (
    <SuggestionsProvider>
      <Home />
    </SuggestionsProvider>
  )
}

export default App
