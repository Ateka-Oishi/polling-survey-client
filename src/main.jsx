import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    {/* <QueryClientProvider client={QueryClient}> */}
    <AuthProvider>
        <div className='md:max-w-screen-2xl  overflow-x-hidden md:mx-auto'>
          <React.StrictMode>
            <RouterProvider router={router} />
          </React.StrictMode>
        </div>
        </AuthProvider>
    {/* </QueryClientProvider> */}
  </HelmetProvider>
)
