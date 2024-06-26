import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IconSwitchHorizontal, IconLogout } from '@tabler/icons-react'
import { Badge, Group, ActionIcon } from '@mantine/core'
import LinksGroup from './LinksGroup'
import LoginSignup from './LoginSignup'
import css from './SideNav.module.css'

interface SideNaveProps {
  isLoggedIn: boolean
}

export default function SideNav({ isLoggedIn }: SideNaveProps) {
  const [openModal, setOpenModal] = useState(false)
  const [formType, setFormType] = useState('')
  const navigate = useNavigate()

  const handleClose = () => {
    setOpenModal(false)
  }
  async function handleLogout() {
    navigate('/')

    const response = await fetch('/logout', {
      method: 'DELETE',
    })
    console.log('RES', response)
    if (response.ok) {
      // setIsLoggedIn(false)
      // setCurrentUser({
      //   id: '',
      //   username: '',
      // })
    } else console.log('not logged out')
  }

  return (
    <div className={css.navbar}>
      <div className={css.navbarMain}>
        {/* <Group className={css.header} justify="space-between"></Group> */}
        {/* {links} */}
        <LinksGroup />
      </div>

      <div className={css.footer}>
        {!isLoggedIn ? (
          <div className={css.link}>
            <IconSwitchHorizontal className={css.linkIcon} stroke={1.5} />
            <Group justify="apart">
              <Badge
                variant="outline"
                color="cyan"
                radius="md"
                onClick={() => {
                  setFormType('login')
                  setOpenModal(true)
                }}
              >
                Login
              </Badge>
              -
              <Badge
                variant="outline"
                color="cyan"
                radius="md"
                onClick={() => {
                  setFormType('signup')
                  setOpenModal(true)
                }}
              >
                SignUp
              </Badge>
            </Group>
          </div>
        ) : null}

        <div className={css.link} onClick={() => handleLogout()}>
          <IconLogout className={css.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </div>
        <LoginSignup
          openModal={openModal}
          handleClose={handleClose}
          formType={formType}
        />
      </div>
    </div>
  )
}
