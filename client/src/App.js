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
import NotLoggedInAlert from './NotLoggedInAlert'
import UserAdditions from './UserAdditions'

function App() {
  const [currentUser, setCurrentUser] = useState({
    id: '',
    username: '',
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userImage, setUserImage] = useState('')
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
    // navigate('/UserProfile')
  }

  async function handleUserImage() {
    await fetch(
      'https://app.pixelencounter.com/api/basic/monsters/random/jpeg?size=100',
      {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
  }

  async function handleLogout() {
    navigate('/')
    const response = await fetch('/logout', {
      method: 'DELETE',
    })
    if (response.ok) {
      setIsLoggedIn(false)
      setCurrentUser({
        id: '',
        username: '',
      })
    }
  }

  return (
    <div>
      <div className="img-container">
        <NavHeader isLoggedIn={isLoggedIn} handleLogout={handleLogout} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                loginSignup={handleLoginSignup}
                isLoggedIn={isLoggedIn}
                handleUserImage={handleUserImage}
              />
            }
          />
          <Route
            path="/SongSifterCreate"
            element={
              isLoggedIn ? (
                <SongSifterCreate
                  currentUser={currentUser}
                  isLoggedIn={isLoggedIn}
                />
              ) : (
                <NotLoggedInAlert />
              )
            }
          />
          <Route
            path="/UserProfile"
            element={
              isLoggedIn ? (
                <UserProfile currentUser={currentUser.id} />
              ) : (
                <NotLoggedInAlert />
              )
            }
          />
          <Route
            path="/ShareCreation"
            element={isLoggedIn ? <ShareCreation /> : <NotLoggedInAlert />}
          />
          <Route
            path="/UserAdditions"
            element={isLoggedIn ? <UserAdditions /> : <NotLoggedInAlert />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
