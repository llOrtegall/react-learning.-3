import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

interface Props {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextType | undefined>({
  isAuthenticated: false,
  login: () => { },
  logout: () => { }
})

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  const login = (): void => {
    setIsAuthenticated(true)
    navigate('/')
  }

  const logout = (): void => {
    setIsAuthenticated(false)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
