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

interface LinksGroupProps {
  icon: React.FC<any>
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
}

const data = [
  { link: 'user-profile', label: 'Profile', icon: IconUserHeart },
  { link: 'share-and-search', label: 'Search', icon: IconSearch },
  { link: 'create', label: 'Create', icon: IconIceCream2 },
  {
    link: '',
    label: 'Add',
    icon: IconSettings,
    additions: [
      { link: 'add-lyrics', label: 'Lyrics', icon: IconMicrophone },
      { link: 'add-enigma', label: 'Enigmas', icon: IconScanEye },
      { link: 'add-chords', label: 'Chord Progressions', icon: IconPlaylist },
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
        <div key={item.label}>
          <NavLink
            className={css.link}
            data-active={item.label === active || undefined}
            to={item.link}
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
              {item.additions ? (
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
          {item.additions ? (
            <Collapse in={opened}>
              <Stack className={css.collapseLink}>
                {item.additions.map((item) => (
                  <NavLink
                    className={css.nestedLink}
                    data-active={item.label === active || undefined}
                    to={item.link}
                    key={item.label}
                    onClick={(event) => {
                      event.preventDefault()
                      setActive(item.label)
                      navigate(item.link)
                    }}
                  >
                    <item.icon className={css.linkIcon} stroke={1.5} />
                    {item.label}
                  </NavLink>
                ))}
              </Stack>
            </Collapse>
          ) : null}
        </div>
      ))}
    </>
  )
}
