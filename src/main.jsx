import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import ProductProvider from './context/ProductContext'
import BasketProvider from './context/BasketContext'
import AuthProvider from './context/AuthContext'
import SearchProvider from './context/SearchContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <SearchProvider>
      <ProductProvider>
        <BasketProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BasketProvider>
      </ProductProvider>
    </SearchProvider>
  </BrowserRouter>
)
