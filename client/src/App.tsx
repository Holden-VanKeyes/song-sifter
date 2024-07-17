import React, { createContext, useContext, useState, useEffect } from 'react'
import './App.css'
import NavHeader from './NavHeader'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import SongSifterCreate from './SongSifterCreate'
import UserProfile from './UserProfile'
import ShareCreation from './ShareCreation'
import { useNavigate, useLocation } from 'react-router-dom'
import NotLoggedInAlert from './NotLoggedInAlert'
import SplashPage from './SplashPage'
import FilterHelper from './FilterHelper'
import Offset from './Offset'
import {
  AppShell,
  Burger,
  Group,
  Button,
  Image,
  ActionIcon,
  Box,
  Flex,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import SideNav from './Components/SideNav'
import { images } from './constants/constants'
import { ReactComponent as Logo } from './assets/images/logo.svg'
import CreationForm from './Components/Forms/CreationForm'
import { IconSun, IconMoon } from '@tabler/icons-react'
import HomePage from './HomePage'
// import cx from 'clsx'

import css from './App.module.scss'

interface UserContext {}

const UserAuth = createContext<{
  currentUser: null
  setCurrentUser: React.Dispatch<React.SetStateAction<null>>
} | null>(null)

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  // const [currentUser, setCurrentUser] = useState({
  //   id: '',
  //   username: '',
  //   profile_pic: '',
  // })
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
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
  const [selectedComponent, setSeletedComponent] = useState('')

  const [opened, { toggle }] = useDisclosure()

  const pathname = useLocation().pathname

  const navigate = useNavigate()

  // useEffect(() => {
  //   fetch('/me', {
  //     credentials: 'include',
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       fetch('/creations')
  //         .then((response) => response.json())
  //         .then((data) => {
  //           // setShowFilteredPage(data)
  //         })
  //       if (data.username) {
  //         handleLoginSignup(data)
  //       } else {
  //         return null
  //       }
  //     })
  // }, [])

  useEffect(() => {
    console.log('RUNNING')
    const fetcher = async () => {
      const req = await fetch('/me', { credentials: 'include' })

      if (req.status !== 200) {
        return
      }
      const user = await req.json()
      if (user.id) {
        setIsLoggedIn(true)
        setCurrentUser(user)
      }
      // const user = await getUser.json()
      console.log('USER', user)
    }
    fetcher()
  }, [currentUser])
  console.log('USER', currentUser)
  //close sideNav when navigating to new page
  useEffect(() => {
    if (opened) {
      toggle()
    }
  }, [pathname])

  function showLoginInfo() {
    setGetStarted(true)
    navigate('/')
  }

  function handleLoginSignup(user: any) {
    setGetStarted(false)
    setCurrentUser(user)
    setIsLoggedIn(true)
  }

  function resetFunction() {
    setRefreshed(true)
  }

  function handleSearch(category: any, name: any) {
    setFilteredSearch(category)
    setFilteredType(name)
  }

  function showModalPopUp(e: any) {
    setShowAddYourOwnForm(true)
    setUserAddSelection(e.target.value)
  }
  function handleCloseModal() {
    setShowAddYourOwnForm(false)
  }

  function updatedUserRefresh(data: any) {
    setCurrentUser(data)
  }

  function updateSharePage(filteredSet: any) {
    setFilteredType('')
    setRefreshed(false)
    setSharePageUpdate(filteredSet)
  }

  const handleOffset = () => {
    console.log('in off', showOffset)
    setShowOffset(!showOffset)
  }
  const handleShowComponent = (label: string) => {
    console.log('YO IT me', label)
  }
  // async function postShare(musicShare) {
  //   await fetch('/creations', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(musicShare),
  //   }).then((response) => response.json())
  //   // .then((data) => {
  //   //   setShowFilteredPage(data)
  //   // })
  //   fetch('/creations')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setShowFilteredPage(data)
  //     })

  //   navigate('/ShareCreation')
  // }

  // async function handleLogout() {
  //   navigate('/')
  //   setGetStarted(false)
  //   const response = await fetch('/logout', {
  //     method: 'DELETE',
  //   })
  //   if (response.ok) {
  //     setIsLoggedIn(false)
  //     setCurrentUser({
  //       id: '',
  //       username: '',
  //     })
  //   }
  // }

  return (
    <>
      <UserAuth.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <AppShell
          header={{ height: 80 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
          }}
        >
          <AppShell.Navbar>
            <SideNav isLoggedIn={isLoggedIn} />
          </AppShell.Navbar>
          <AppShell.Header>
            <Flex justify="space-between" align="center">
              <Group>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="md"
                  p="xl"
                />
              </Group>

              <Group p="sm" mr="md" justify="flex-end">
                <ActionIcon
                  radius="md"
                  className={css.darkToggle}
                  onClick={() =>
                    setColorScheme(
                      computedColorScheme === 'light' ? 'dark' : 'light'
                    )
                  }
                  variant="outline"
                  color="rgba(0, 0, 0, 1)"
                  size="md"
                  mr="sm"
                  aria-label="Toggle color scheme"
                >
                  {computedColorScheme === 'light' ? (
                    <IconMoon stroke={1.0} size={20} />
                  ) : (
                    <IconSun stroke={1.0} size={20} color="orange" />
                  )}
                </ActionIcon>
                <Logo style={{ width: '54' }} onClick={() => navigate('/')} />
              </Group>
            </Flex>
          </AppShell.Header>

          <AppShell.Main>
            <Routes>
              <Route
                path="/UserProfile"
                element={
                  <UserProfile
                    currentUser={currentUser}
                    postShare={'postShare'}
                    showModalPopUp={showModalPopUp}
                    // handleCloseModal={handleCloseModal}
                    updatedUserRefresh={updatedUserRefresh}
                  />
                }
              />
              <Route path="SongSifterCreate" element={<CreationForm />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
            {/* <UserProfile
            currentUser={currentUser}
            postShare={'postShare'}
            showModalPopUp={showModalPopUp}
            // handleCloseModal={handleCloseModal}
            updatedUserRefresh={updatedUserRefresh}
          /> */}
          </AppShell.Main>
        </AppShell>
      </UserAuth.Provider>
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
    //       // isLoggedIn={isLoggedIn}
    //       // handleLogout={handleLogout}
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
    //               // postShare={postShare}
    //               showModalPopUp={showModalPopUp}
    //               // handleCloseModal={handleCloseModal}
    //               updatedUserRefresh={updatedUserRefresh}
    //             />
    //           ) : (
    //             <NotLoggedInAlert />
    //           )
    //         }
    //       />
    //       {/* <Route
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
    //       /> */}
    //       {/* <Route
    //         path="/SplashPage"
    //         element={
    //           <SplashPage
    //             className="splash-page"
    //             // showOffset={showOffset}
    //             // setShowOffset={setShowOffset}
    //           />
    //         }
    //       /> */}
    //     </Routes>
    //   </div>
    // </div>
  )
}

export default App
