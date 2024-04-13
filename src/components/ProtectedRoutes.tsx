import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  isAllow: boolean
  redirecTo: string
}

export function ProtectedRoutes ({ isAllow, redirecTo = '/login' }: Props): JSX.Element {
  if (isAllow) {
    return <Navigate to={redirecTo} />
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}
