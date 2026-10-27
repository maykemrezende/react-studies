import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// Em desenvolvimento o StrictMode renderiza componentes e roda effects duas vezes
// de propósito, para expor effects sem cleanup. Não remova.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
