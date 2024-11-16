import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomLayout from './components/layout/CustomLayout'
import LoginPage from './presentation/pages/auth/LoginPage'
import UnauthorizedPage from './presentation/pages/auth/unauthorized'
import ListCategoriesPage from './presentation/pages/categories'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        <Route path='/categories' element={<ListCategoriesPage />} />
        <Route path='/' element={<CustomLayout />}>
          <Route path='unauthorized' element={<UnauthorizedPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
