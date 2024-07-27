import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Avatar,
  Text,
  Button,
  Paper,
  Box,
  Group,
  ActionIcon,
  Card,
  Center,
  Blockquote,
  Stack,
  Flex,
  Tabs,
} from '@mantine/core'
import {
  IconScanEye,
  IconMicrophone,
  IconPlaylist,
  IconChevronRight,
  IconChevronLeft,
  IconPencil,
} from '@tabler/icons-react'

interface ViewUserProps {
  bio: string
  email: string
  id: number
  profile_pic?: string
  username: string
}

export default function ViewUser() {
  const [viewedUser, setViewedUser] = useState<ViewUserProps | undefined>()

  const { state } = useLocation()

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`/selected_user?id=${state}`)

      if (res.ok) {
        const data = await res.json()
        setViewedUser(data)
      } else console.log('ERROR', res.statusText)
    }

    fetcher()
  }, [state])
  const colorMatch = viewedUser
    ? `#${viewedUser.profile_pic?.slice(viewedUser.profile_pic.length - 6)}`
    : '#44c4f2f5'

  return (
    <>
      <Paper radius="md" p="lg" bg="var(--mantine-color-body)" mb="xl" mt="sm">
        <Center>
          <Avatar
            src={viewedUser?.profile_pic}
            size={120}
            radius={120}
            mx="auto"
          />
        </Center>

        <Text ta="center" fz="lg" fw={500} mt="md">
          {viewedUser?.username}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          bassist
        </Text>
        <Group justify="center">
          <Button variant="outline" mt="md" fullWidth color={`${colorMatch}`}>
            Contact
          </Button>
        </Group>
      </Paper>

      <Box m="md">
        <Stack>
          <Blockquote
            color="teal"
            radius="lg"
            style={{
              borderInlineEnd: '3px solid aquamarine',
            }}
          >
            hey heye hey
          </Blockquote>

          <Blockquote
            style={{
              borderInlineEnd: '3px solid crimson',
            }}
            color="rgba(255, 144, 92, 1)"
            radius="lg"
          >
            hey heye hey
          </Blockquote>

          <Blockquote
            color="cyan"
            radius="lg"
            style={{
              borderInlineEnd: '3px solid cornflowerblue',
            }}
          >
            hey heye hey
          </Blockquote>
        </Stack>
      </Box>
    </>
  )
}
