import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './input.css'

import App from './App.tsx'
import { store } from './store.ts'

const fakeCategoriesList = [
  { id: 1, name: 'Construcao', description: 'Material de construcao' },
  { id: 2, name: 'Cama mesa e banho', description: 'Tudo para sua cama, mesa ou banho.' },
  { id: 3, name: 'Cozinha', description: 'Utensilios para sua cozinha' },
]

const fakeProductsList = [
  { id: 1, name: 'Colher de pedreiro', description: 'Colher para mexer massa', price: 129.8, stockQuantity: 129, category: 'Material de construcao' },
  { id: 2, name: 'Toalha de banho', description: 'Toalha para se enxugar', price: 19.99, stockQuantity: 1230, category: 'Cama mesa e banho' },
  { id: 3, name: 'Faca de serra', description: 'Faca para cortar pao', price: 5.50, stockQuantity: 2000, category: 'Cozinha' },
]


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
