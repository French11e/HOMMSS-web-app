import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Shop from './Pages/Shop.tsx'
import Product from './Pages/Product.tsx'
import PageNotFount from './Pages/PageNotFount.tsx'
import { About } from './Pages/About.tsx'
import { SingleProduct } from './Pages/SingleProduct.tsx'
import HomePage from './Pages/Homepage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFount />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: '/about',
        element: <About /> 
      },
      {
        path: '/products',
        element: <Product /> 
      }
    ]
  }, 
  {
    path: 'product/:id',
    element: <SingleProduct /> 
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
