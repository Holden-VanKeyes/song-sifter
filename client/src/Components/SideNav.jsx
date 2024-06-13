import React, { useState } from 'react'

import { Group, Code } from '@mantine/core'
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
  IconMicrophone,
  IconScanEye,
  IconPlaylist,
  IconUserHeart,
  IconSearch,
  IconIceCream,
  IconIceCream2,
} from '@tabler/icons-react'
// import { MantineLogo } from '@mantinex/mantine-logo'
import css from './SideNav.module.css'

const data = [
  { link: '', label: 'Profile', icon: IconUserHeart },
  { link: '', label: 'Search', icon: IconSearch },
  { link: '', label: 'Create', icon: IconIceCream2 },
  {
    link: '',
    label: 'Add',
    icon: IconSettings,
    links: [
      { link: '', label: 'Lyrics', icon: IconMicrophone },
      { link: '', label: 'Enigmas', icon: IconScanEye },
      { link: '', label: 'Chord Progressions', icon: IconPlaylist },
    ],
  },
]

export default function SideNav() {
  const [active, setActive] = useState('')

  const links = data.map((item) => (
    <a
      className={css.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
      }}
    >
      <item.icon className={css.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <nav className={css.navbar}>
      <div className={css.navbarMain}>
        {/* <Group className={css.header} justify="space-between"></Group> */}
        {links}
      </div>

      <div className={css.footer}>
        <a
          href="#"
          className={css.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={css.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={css.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={css.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  )
}
