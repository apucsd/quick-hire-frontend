import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/routes.tsx'
import { ReduxProvider } from './redux/lib/ReduxProvider.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>

      <ReduxProvider>
        <Toaster position="top-right" reverseOrder={false} toastOptions={{
          style: {
            background: "#4640DE",
            color: "#fff"
          },

        }} />
        <RouterProvider router={router} />
      </ReduxProvider>
    </div>
  </StrictMode>,
)

