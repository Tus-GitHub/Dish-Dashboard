import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path = "/" element ={<Dashboard />} />
        <Route path = "/about" element ={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
