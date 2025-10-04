import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalStyles>
  </StrictMode>,
)
