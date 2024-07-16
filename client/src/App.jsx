import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path = "/" element ={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
