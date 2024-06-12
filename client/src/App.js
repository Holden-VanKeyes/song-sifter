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
import Offset from './Offset'
import { AppShell, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

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
  const [getStarted, setGetStarted] = useState(false)
  const [showOffset, setShowOffset] = useState(false)
  const [opened, { toggle }] = useDisclosure()

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
            // setShowFilteredPage(data)
          })
        if (data.username) {
          handleLoginSignup(data)
        } else {
          return null
        }
      })
  }, [])

  function showLoginInfo() {
    setGetStarted(true)
    navigate('/')
  }

  function handleLoginSignup(user) {
    setGetStarted(false)
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

  function updatedUserRefresh(data) {
    setCurrentUser(data)
  }

  function updateSharePage(filteredSet) {
    setFilteredType('')
    setRefreshed(false)
    setSharePageUpdate(filteredSet)
  }

  const handleOffset = () => {
    console.log('in off', showOffset)
    setShowOffset(!showOffset)
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
    setGetStarted(false)
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
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </>
    // <div>
    //   <Offset showOffset={showOffset} handleOffset={handleOffset} />
    //   <FilterHelper
    //     filteredSearch={filteredSearch}
    //     filteredType={filteredType}
    //     updateSharePage={updateSharePage}
    //     showFilteredPage={showFilteredPage}
    //   />
    //   <div
    //     className="img-container"
    //     style={{
    //       backgroundRepeat: 'no-repeat',
    //       backgroundSize: '100vw 100vh',
    //       display: 'flex',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       height: '100vh',
    //       width: '100vw',
    //     }}
    //   >
    //     <NavHeader
    //       isLoggedIn={isLoggedIn}
    //       handleLogout={handleLogout}
    //       handleSearch={handleSearch}
    //       resetFunction={resetFunction}
    //       showAddYourOwnForm={showAddYourOwnForm}
    //       userAddSelection={userAddSelection}
    //       handleCloseModal={handleCloseModal}
    //       currentUser={currentUser}
    //       showLoginInfo={showLoginInfo}
    //       handleOffset={handleOffset}
    //       // loginSignup={handleLoginSignup}
    //     />

    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <Home
    //             loginSignup={handleLoginSignup}
    //             isLoggedIn={isLoggedIn}
    //             getStarted={getStarted}
    //             // showOffset={showOffset}
    //           />
    //         }
    //       />
    //       <Route
    //         path="/SongSifterCreate"
    //         element={
    //           isLoggedIn ? (
    //             <SongSifterCreate
    //               currentUser={currentUser}
    //               isLoggedIn={isLoggedIn}
    //             />
    //           ) : (
    //             <NotLoggedInAlert />
    //           )
    //         }
    //       />
    //       <Route
    //         path="/UserProfile"
    //         element={
    //           isLoggedIn ? (
    //             <UserProfile
    //               currentUser={currentUser}
    //               postShare={postShare}
    //               showModalPopUp={showModalPopUp}
    //               handleCloseModal={handleCloseModal}
    //               updatedUserRefresh={updatedUserRefresh}
    //             />
    //           ) : (
    //             <NotLoggedInAlert />
    //           )
    //         }
    //       />
    //       <Route
    //         path="/ShareCreation"
    //         element={
    //           isLoggedIn ? (
    //             <ShareCreation
    //               currentUser={currentUser}
    //               filteredSearch={filteredSearch}
    //               filteredType={filteredType}
    //               sharePageUpdate={sharePageUpdate}
    //               refreshed={refreshed}
    //               resetFunction={resetFunction}
    //             />
    //           ) : (
    //             <NotLoggedInAlert />
    //           )
    //         }
    //       />
    //       <Route
    //         path="/SplashPage"
    //         element={
    //           <SplashPage
    //             className="splash-page"
    //             // showOffset={showOffset}
    //             // setShowOffset={setShowOffset}
    //           />
    //         }
    //       />
    //     </Routes>
    //   </div>
    // </div>
  )
}

export default App
