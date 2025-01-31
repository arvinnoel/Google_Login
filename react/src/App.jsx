import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
