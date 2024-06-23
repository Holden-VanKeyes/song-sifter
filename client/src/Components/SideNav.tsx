import React, { useState } from 'react'

import { IconSwitchHorizontal, IconLogout } from '@tabler/icons-react'
import { Badge, Group, ActionIcon } from '@mantine/core'
import LinksGroup from './LinksGroup'
import LoginSignup from './LoginSignup'
import css from './SideNav.module.css'

export default function SideNav() {
  const [openModal, setOpenModal] = useState(false)
  const [formType, setFormType] = useState('')

  const handleClose = () => {
    setOpenModal(false)
  }
  return (
    <div className={css.navbar}>
      <div className={css.navbarMain}>
        {/* <Group className={css.header} justify="space-between"></Group> */}
        {/* {links} */}
        <LinksGroup />
      </div>

      <div className={css.footer}>
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

        <div className={css.link} onClick={() => setOpenModal(true)}>
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
