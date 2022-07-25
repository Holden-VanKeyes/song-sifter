import './App.css'
import NavHeader from './NavHeader'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SongSifterCreate from './SongSifterCreate'
import UserProfile from './UserProfile'
import ShareCreation from './ShareCreation'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState({
    id: '',
    username: '',
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    fetch('/me', {
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.username) {
          handleLoginSignup(data)

          // navigate('home')
        } else {
          return null
        }
      })
  }, [])

  function handleLoginSignup(user) {
    setCurrentUser(user)
    setIsLoggedIn(true)
  }

  async function handleLogout() {
    navigate('/')
    const response = await fetch('/logout', {
      method: 'DELETE',
    })
    if (response.ok) {
      setIsLoggedIn(false)
    }
  }

  return (
    <div>
      <NavHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <Home loginSignup={handleLoginSignup} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          path="/SongSifterCreate"
          element={<SongSifterCreate currentUser={currentUser} />}
        />
        <Route
          path="/UserProfile"
          element={<UserProfile currentUser={currentUser.id} />}
        />
        <Route path="/ShareCreation" element={<ShareCreation />} />
      </Routes>
    </div>
  )
}

export default App
