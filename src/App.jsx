import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components'
import { Home, User, Coach } from './pages'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/user" element={ <User /> } />
        <Route path="/coach" element={ <Coach /> } />
      </Routes>
    </div>
  )
}

export default App
