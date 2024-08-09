import { useEffect, useState, useContext } from 'react'
import { UserContext } from 'src/global/UserContext'
import {
  Button,
  Text,
  Paper,
  Group,
  rem,
  ActionIcon,
  Card,
  Transition,
  Flex,
  Stack,
} from '@mantine/core'
import {
  IconScanEye,
  IconMicrophone,
  IconPlaylist,
  IconChevronRight,
  IconChevronLeft,
} from '@tabler/icons-react'
import css from './SavedInspos.module.css'
import { InspirationObjectProps } from './Forms/CreationForm'

interface UserInspirationProps {
  handleShare: () => void
}

export function SavedInspos({ handleShare }: UserInspirationProps) {
  const [position, setPosition] = useState(0)
  const [transitionEnded, setTransitionEnded] = useState(true)
  const [opened, setOpened] = useState(false)
  // const [showChevron, setShowChevron] = useState(false)
  const [userInspirations, setUserInspirations] = useState<any>([])
  const { currentUser } = useContext(UserContext)
  const mounted = userInspirations.length > 0

  const getInspos = async () => {
    const response = await fetch(
      `/user_inspirations?user_id=${currentUser?.id}`
    )
    const data = await response.json()
    if (response.ok) {
      setUserInspirations(data)
    } else console.log(response.statusText)
  }

  useEffect(() => {
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

  const handleDelete = async () => {
    const res = await fetch(
      `/delete_inspiration?id=${userInspirations[position].id}`,
      {
        method: 'DELETE',
      }
    )
    if (res.ok) {
      getInspos()
      console.log('Success', res.statusText)
    } else console.log('not deleted', res.statusText)
  }

  return mounted ? (
    <Card withBorder padding="lg" radius="md" mt="lg">
      <Card.Section inheritPadding withBorder>
        <Group justify="center">
          <ActionIcon
            color="teal"
            variant="outline"
            // mr="xl"
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
          <Text fz="lg" fw={500} m="md" ta="center">
            {userInspirations[position].title}
          </Text>
          <ActionIcon
            color="teal"
            variant="outline"
            // ml="xl"
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
      </Card.Section>

      <Stack py="md">
        <Group wrap="nowrap">
          <ActionIcon color="rgb(160, 194, 207)" size={35} radius="lg">
            <IconPlaylist width={25} height={25} />
          </ActionIcon>
          <Text fz="sm">{userInspirations[position].chord_return}</Text>
        </Group>

        <Group wrap="nowrap">
          <ActionIcon color="rgb(160, 194, 207)" size={35} radius="lg">
            <IconScanEye width={25} height={25} />
          </ActionIcon>
          <Text fz="sm">{userInspirations[position].enigma_return}</Text>
        </Group>

        <Group wrap="nowrap">
          <ActionIcon color="rgb(160, 194, 207)" size={35} radius="lg">
            <IconMicrophone width={24} height={24} />
          </ActionIcon>
          <Text fz="sm">{userInspirations[position].lyric_return}</Text>
        </Group>
      </Stack>
      <Card.Section withBorder p="md">
        <Group justify="center" style={{ gap: '80px' }}>
          <Button radius="md" variant="outline" onClick={handleShare}>
            Share
          </Button>
          <Button radius="md" variant="outline" onClick={() => handleDelete()}>
            Delete
          </Button>
        </Group>
      </Card.Section>
    </Card>
  ) : null
}
