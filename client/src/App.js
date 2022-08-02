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
import SplashPage from './SplashPage'
import FilterHelper from './FilterHelper'

function App() {
  const [currentUser, setCurrentUser] = useState({
    id: '',
    username: '',
    profile_pic: '',
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [filteredSearch, setFilteredSearch] = useState('')
  const [filteredType, setFilteredType] = useState('')
  const [sharePageUpdate, setSharePageUpdate] = useState([])
  const [showFilteredPage, setShowFilteredPage] = useState([])
  const [refreshed, setRefreshed] = useState(false)
  const [showAddYourOwnForm, setShowAddYourOwnForm] = useState(false)
  const [userAddSelection, setUserAddSelection] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    fetch('/me', {
      credentials: 'include',
    })
      .then((r) => r.json())
      .then((data) => {
        fetch('/creations')
          .then((response) => response.json())
          .then((data) => {
            setShowFilteredPage(data)
          })
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

  function resetFunction() {
    setRefreshed(true)
  }

  function handleSearch(category, name) {
    setFilteredSearch(category)
    setFilteredType(name)
  }

  function showModalPopUp(e) {
    setShowAddYourOwnForm(true)
    setUserAddSelection(e.target.value)
  }
  function handleCloseModal() {
    setShowAddYourOwnForm(false)
  }

  function updateSharePage(filteredSet) {
    console.log(filteredSet)
    setFilteredType('')
    setRefreshed(false)
    setSharePageUpdate(filteredSet)
  }

  async function postShare(musicShare) {
    await fetch('/creations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(musicShare),
    }).then((response) => response.json())
    // .then((data) => {
    //   setShowFilteredPage(data)
    // })
    fetch('/creations')
      .then((response) => response.json())
      .then((data) => {
        setShowFilteredPage(data)
      })

    navigate('/ShareCreation')
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
      <FilterHelper
        filteredSearch={filteredSearch}
        filteredType={filteredType}
        updateSharePage={updateSharePage}
        showFilteredPage={showFilteredPage}
      />
      <div className="img-container">
        <NavHeader
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          handleSearch={handleSearch}
          resetFunction={resetFunction}
          showAddYourOwnForm={showAddYourOwnForm}
          userAddSelection={userAddSelection}
          handleCloseModal={handleCloseModal}
          currentUser={currentUser}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home loginSignup={handleLoginSignup} isLoggedIn={isLoggedIn} />
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
                <UserProfile
                  currentUser={currentUser}
                  postShare={postShare}
                  showModalPopUp={showModalPopUp}
                  handleCloseModal={handleCloseModal}
                />
              ) : (
                <NotLoggedInAlert />
              )
            }
          />
          <Route
            path="/ShareCreation"
            element={
              isLoggedIn ? (
                <ShareCreation
                  currentUser={currentUser}
                  filteredSearch={filteredSearch}
                  filteredType={filteredType}
                  sharePageUpdate={sharePageUpdate}
                  refreshed={refreshed}
                  resetFunction={resetFunction}
                />
              ) : (
                <NotLoggedInAlert />
              )
            }
          />
          <Route
            path="/SplashPage"
            element={isLoggedIn ? <SplashPage /> : <NotLoggedInAlert />}
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
