import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ShopPage from './Shop.jsx'
import CheckoutPage from './Checkout.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
  {
    path: "shop/cart",
    element:<CheckoutPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
