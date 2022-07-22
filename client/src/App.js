import './App.css'
import NavHeader from './NavHeader'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SongSifterCreate from './SongSifterCreate'
import UserProfile from './UserProfile'
import ShareCreation from './ShareCreation'
import { useState } from 'react'

function App() {
  const [currentUser, setCurrentUser] = useState({
    id: '',
    username: '',
  })
  return (
    <div>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SongSifterCreate" element={<SongSifterCreate />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/ShareCreation" element={<ShareCreation />} />
      </Routes>
    </div>
  )
}

export default App
