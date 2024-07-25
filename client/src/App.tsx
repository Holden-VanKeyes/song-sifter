import React, { useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'

import { UserContext } from './global/UserContext'

import { IconSun, IconMoon } from '@tabler/icons-react'
import {
  AppShell,
  Burger,
  Group,
  ActionIcon,
  Flex,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core'
import css from './App.module.scss'
import { ReactComponent as Logo } from './assets/images/logo.svg'
import { useDisclosure } from '@mantine/hooks'

import UserProfile from './components/UserProfile'
import SideNav from './components/SideNav'
import CreationForm from './components/Forms/CreationForm'
import HomePage from './HomePage'
import AddLyrics from './components/AddLyrics'
import AddEnigma from './components/AddEnigma'
import AddChords from './components/AddChords'
import Search from './components/ShareAndSearch'
import ViewUser from './components/ViewUser'

function App() {
  const { setCurrentUser } = useContext(UserContext)

  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })

  const [opened, { toggle }] = useDisclosure()

  const pathname = useLocation().pathname

  const navigate = useNavigate()

  useEffect(() => {
    const fetcher = async () => {
      const req = await fetch('/me', { credentials: 'include' })

      if (req.status !== 200) {
        console.log('ERROR', req.statusText)
        return
      }
      const userSession = await req.json()
      if (userSession.id) {
        setCurrentUser!(userSession)
      }
    }
    fetcher()
  }, [])

  //close sideNav when navigating to new page
  useEffect(() => {
    if (opened) {
      toggle()
    }
  }, [pathname])

  // function updateSharePage(filteredSet: any) {
  //   setFilteredType('')
  //   setRefreshed(false)
  //   setSharePageUpdate(filteredSet)
  // }

  // const handleOffset = () => {
  //   console.log('in off', showOffset)
  //   setShowOffset(!showOffset)
  // }
  // const handleShowComponent = (label: string) => {
  //   console.log('YO IT me', label)
  // }
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

  return (
    <>
      <AppShell
        header={{ height: 80 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Navbar>
          <SideNav />
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
            <Route path="/" element={<HomePage />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/view-user" element={<ViewUser />} />
            <Route path="/share-and-search" element={<Search />} />
            <Route path="create" element={<CreationForm />} />
            <Route path="/add-lyrics" element={<AddLyrics />} />
            <Route path="/add-enigma" element={<AddEnigma />} />
            <Route path="/add-chords" element={<AddChords />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </>
  )
}

export default App
