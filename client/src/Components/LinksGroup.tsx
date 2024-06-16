import { useState } from 'react'
import { Group, Code, Collapse, Text, rem, Stack, Flex } from '@mantine/core'
import {
  IconSettings,
  IconMicrophone,
  IconScanEye,
  IconPlaylist,
  IconUserHeart,
  IconSearch,
  IconIceCream2,
  IconChevronRight,
} from '@tabler/icons-react'
import css from './SideNav.module.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

{
  /* <Link
to="/UserProfile"
style={{
  padding: '10px',
  textDecoration: 'none',
  color: '#99E1D9',
}}
>
Profile
</Link> */
}

interface LinksGroupProps {
  icon: React.FC<any>
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
}

const data = [
  { link: 'UserProfile', label: 'Profile', icon: IconUserHeart },
  { link: '', label: 'Search', icon: IconSearch },
  { link: 'SongSifterCreate', label: 'Create', icon: IconIceCream2 },
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

export default function LinksGroup(): JSX.Element {
  const [active, setActive] = useState('')
  const [opened, setOpened] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      {data.map((item) => (
        <>
          <NavLink
            className={css.link}
            data-active={item.label === active || undefined}
            to={item.link}
            key={item.label}
            onClick={(event) => {
              event.preventDefault()

              setActive(item.label)

              if (item.label === 'Add') {
                setOpened(!opened)
              } else navigate(item.link)
            }}
          >
            <item.icon className={css.linkIcon} stroke={1.5} />

            <Group>
              {item.label}
              {item.links ? (
                <IconChevronRight
                  className={css.chevron}
                  stroke={1.5}
                  style={{
                    width: rem(16),
                    height: rem(16),
                    transform: opened ? 'rotate(-90deg)' : 'none',
                  }}
                />
              ) : null}
            </Group>
          </NavLink>
          {item.links ? (
            <Collapse in={opened}>
              <Stack className={css.collapseLink}>
                {item.links.map((link) => (
                  <Text
                    className={css.nestedLink}
                    data-active={link.label === active || undefined}
                    // href={link.link}
                    key={link.label}
                    onClick={(event) => {
                      console.log('Click', link.label)
                      event.preventDefault()
                      setActive(link.label)
                    }}
                  >
                    <link.icon className={css.linkIcon} stroke={1.5} />
                    {link.label}
                  </Text>
                ))}
              </Stack>
            </Collapse>
          ) : null}
        </>
      ))}
    </>
  )
}
