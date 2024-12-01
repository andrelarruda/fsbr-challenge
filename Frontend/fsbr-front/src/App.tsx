import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomLayout from './components/layout/CustomLayout'
import LoginPage from './presentation/pages/auth/LoginPage'
import UnauthorizedPage from './presentation/pages/auth/unauthorized'
import ListCategoriesPage from './presentation/pages/categories/list'
import SignupPage from './presentation/pages/auth/SignupPage'
import HomePage from './presentation/pages/home'
import ListProductsPage from './presentation/pages/products/list'
import UpdateCategoryPage from './presentation/pages/categories/update'
import CreateCategoryPage from './presentation/pages/categories/create'
import CreateProductPage from './presentation/pages/products/create'
import UpdateProductPage from './presentation/pages/products/update'

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
            <Route path='create' element={<CreateCategoryPage />} />
            <Route path='update/:id' element={<UpdateCategoryPage />} />
          </Route>

          <Route path='products'>
            <Route path='' element={<ListProductsPage />} />
            <Route path='create' element={<CreateProductPage />} />
            <Route path='update/:id' element={<UpdateProductPage />} />
          </Route>
          <Route path='unauthorized' element={<UnauthorizedPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
