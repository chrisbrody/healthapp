import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components'
import { Home, User } from './pages'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/user" element={ <User /> } />
      </Routes>
    </div>
  )
}

export default App
