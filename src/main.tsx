import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes/routes.tsx'
import { ReduxProvider } from './redux/lib/ReduxProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>

      <ReduxProvider>
        <RouterProvider router={router} />
      </ReduxProvider>
    </div>
  </StrictMode>,
)

