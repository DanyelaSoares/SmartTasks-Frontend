import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from '../modules/auth/layouts/AuthLayout'
import Login from '../modules/auth/pages/Login'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
