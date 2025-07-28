import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/Routes/route.jsx'
import HomeLayout from './Layouts/HomeLayouts/HomeLayout.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import 'aos/dist/aos.css';



createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router}>
        <HomeLayout></HomeLayout>
      </RouterProvider>
    </AuthProvider>,
)
