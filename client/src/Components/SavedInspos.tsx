import { useEffect, useState, useContext } from 'react'
import { UserContext } from 'src/global/UserContext'
import {
  UnstyledButton,
  Text,
  Paper,
  Group,
  rem,
  ActionIcon,
  Card,
  Transition,
  Center,
} from '@mantine/core'
import {
  IconSwimming,
  IconBike,
  IconRun,
  IconChevronDown,
  IconChevronUp,
  IconScanEye,
  IconMicrophone,
  IconPlaylist,
  IconChevronRight,
  IconChevronLeft,
} from '@tabler/icons-react'
import css from './SavedInspos.module.css'
import { InspirationObjectProps } from './Forms/CreationForm'

// interface UserInspirationProps {
//   userInspirations: InspirationObjectProps[]
// }

export function SavedInspos() {
  const [position, setPosition] = useState(0)
  const [countDirection, setCountDirection] = useState('up')
  const [opened, setOpened] = useState(false)
  const [showChevron, setShowChevron] = useState(false)
  const [userInspirations, setUserInspirations] = useState<any>([])
  const { currentUser } = useContext(UserContext)
  const mounted = userInspirations.length > 0

  useEffect(() => {
    setTimeout(() => {
      setShowChevron(true)
    }, 1200)

    const getInspos = async () => {
      const response = await fetch(
        `/user_inspirations?user_id=${currentUser?.id}`
      )
      const data = await response.json()
      if (response.ok) {
        setUserInspirations(data)
      } else console.log(response.statusText)
    }
    getInspos()
    return () => {}
  }, [currentUser])

  useEffect(() => {
    setTimeout(() => {
      setOpened(true)
    }, 800)
  }, [position])

  const currentInspo = userInspirations[position]

  const handlePosition = () => {
    console.log('Direction', countDirection, position)
    if (position === 0) {
      console.log('set to up')
      setCountDirection('up')
    }

    if (position === userInspirations.length - 1) {
      console.log('setting to down')
      setCountDirection('down')
    }

    if (position < userInspirations.length - 1 && countDirection === 'up') {
      console.log('counting up')
      setPosition(position + 1)
    } else if (position > 0) {
      console.log('counting down')
      setPosition(position - 1)
    } else setPosition(position + 1)
  }

  const currentCard = (
    <Card withBorder padding="lg" radius="md">
      <Card.Section inheritPadding withBorder>
        {mounted ? (
          <Text fz="lg" fw={500} m="md" ta="center">
            {userInspirations[position].title}
          </Text>
        ) : null}
      </Card.Section>
      <Text fz="sm" c="dimmed" mt={5}>
        Form context management, Switch, Grid and Indicator components
        improvements, new hook and 10+ other changes
      </Text>
    </Card>
  )
  //   return userInspirations ? <div>Yes</div> : <div>No</div>
  console.log('current way', countDirection)
  return (
    <>
      <Transition
        mounted={opened}
        transition="slide-left"
        duration={800}
        timingFunction="ease"
      >
        {(styles) => <div style={styles}>{currentCard}</div>}
      </Transition>

      <Transition
        mounted={showChevron}
        transition="fade"
        duration={1600}
        timingFunction="ease"
      >
        {(styles) => (
          <div style={styles}>
            {/* <Center mt="lg">
              <ActionIcon
                color="teal"
                variant="outline"
                onClick={() => {
                  setOpened(false)
                  handlePosition()
                  // setPosition(position + 1)
                }}
              >
                {countDirection === 'up' &&
                position !== userInspirations.length - 1 ? (
                  <IconChevronRight
                    style={{ width: rem(16), height: rem(16) }}
                    className={css.controlIcon}
                    stroke={1.5}
                  />
                ) : (
                  <IconChevronLeft
                    style={{ width: rem(16), height: rem(16) }}
                    className={css.controlIcon}
                    stroke={1.5}
                  />
                )}
              </ActionIcon>
            </Center> */}
            <Group justify="center" mt="lg">
              <ActionIcon
                color="teal"
                variant="outline"
                mr="xl"
                disabled={position === 0 ? true : false}
                onClick={() => {
                  setOpened(false)
                  handlePosition()
                }}
              >
                <IconChevronLeft
                  style={{ width: rem(16), height: rem(16) }}
                  className={css.controlIcon}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon
                color="teal"
                variant="outline"
                ml="xl"
                disabled={
                  position === userInspirations.length - 1 ? true : false
                }
                onClick={() => {
                  setOpened(false)
                  handlePosition()
                }}
              >
                <IconChevronRight
                  style={{ width: rem(16), height: rem(16) }}
                  className={css.controlIcon}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </div>
        )}
      </Transition>
    </>
  )
}
