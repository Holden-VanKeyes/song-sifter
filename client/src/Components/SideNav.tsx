import React from 'react'

import { IconSwitchHorizontal, IconLogout } from '@tabler/icons-react'
// import { MantineLogo } from '@mantinex/mantine-logo'
import LinksGroup from './LinksGroup'
import css from './SideNav.module.css'

export default function SideNav() {
  return (
    <nav className={css.navbar}>
      <div className={css.navbarMain}>
        {/* <Group className={css.header} justify="space-between"></Group> */}
        {/* {links} */}
        <LinksGroup />
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
