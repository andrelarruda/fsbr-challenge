import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomLayout from './components/layout/CustomLayout'
import LoginPage from './presentation/pages/auth/LoginPage'
import UnauthorizedPage from './presentation/pages/auth/unauthorized'
import ListCategoriesPage from './presentation/pages/categories/list'
import SignupPage from './presentation/pages/auth/SignupPage'
import HomePage from './presentation/pages/home'
import ListProductsPage from './presentation/pages/products'
import CreateUpdateCategoryPage from './presentation/pages/categories/create-update'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />

        <Route path='/' element={<CustomLayout />}>
          <Route path='' element={<HomePage />} />
          <Route path='categories'>
            <Route path='' element={<ListCategoriesPage />} />
            <Route path='create' element={<CreateUpdateCategoryPage />} />
          </Route>
          <Route path='products' element={<ListProductsPage />} />
          <Route path='unauthorized' element={<UnauthorizedPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
