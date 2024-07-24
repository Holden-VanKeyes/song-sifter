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
  const [transitionEnded, setTransitionEnded] = useState(true)
  const [opened, setOpened] = useState(false)
  // const [showChevron, setShowChevron] = useState(false)
  const [userInspirations, setUserInspirations] = useState<any>([])
  const { currentUser } = useContext(UserContext)
  const mounted = userInspirations.length > 0

  useEffect(() => {
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
    setTransitionEnded(false)

    setTimeout(() => {
      setTransitionEnded(true)
      setOpened(true)
    }, 800)
  }, [position])

  const currentCard = (
    <>
      {mounted ? (
        <Card withBorder padding="lg" radius="md">
          <Card.Section inheritPadding withBorder>
            <Text fz="lg" fw={500} m="md" ta="center">
              {userInspirations[position].title}
            </Text>
          </Card.Section>
          <Text fz="sm" c="dimmed" mt={5}>
            {userInspirations[position].chord_return}
          </Text>
          <Text fz="sm" c="dimmed" mt={5}>
            {userInspirations[position].enigma_return}
          </Text>
          <Text fz="sm" c="dimmed" mt={5}>
            {userInspirations[position].lyric_return}
          </Text>
        </Card>
      ) : null}
    </>
  )

  return (
    <>
      <Group justify="center" mt="lg" mb="lg">
        <ActionIcon
          color="teal"
          variant="outline"
          mr="xl"
          disabled={position === 0 ? true : false}
          onClick={() => {
            setOpened(false)
            setPosition(position - 1)
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
          disabled={position === userInspirations.length - 1 ? true : false}
          onClick={() => {
            setOpened(false)
            setPosition(position + 1)
          }}
        >
          <IconChevronRight
            style={{ width: rem(16), height: rem(16) }}
            className={css.controlIcon}
            stroke={1.5}
          />
        </ActionIcon>
      </Group>
      {currentCard}
      {/* <Transition
        mounted={opened}
        transition="slide-left"
        duration={600}
        timingFunction="ease"
      >
        {(styles) => <div style={styles}>{currentCard}</div>}
      </Transition> */}
    </>
  )
}