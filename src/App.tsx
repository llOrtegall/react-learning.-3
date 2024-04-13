import { Routes, Route } from 'react-router-dom'
import { ProtectedRoutes } from './components/ProtectedRoutes'
import { useAuth } from './auth/AuthProvider'
import { LoginPage } from './pages/Login'

function App (): JSX.Element {
  const { isAuthenticated } = useAuth()

  console.log(isAuthenticated)

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes isAllow={!isAuthenticated} redirecTo='/login' />}>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
      </Route>
    </Routes>
  )
}

export default App
