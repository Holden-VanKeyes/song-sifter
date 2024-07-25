import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Text,
  Group,
  Container,
  Card,
  Paper,
  Box,
  Stack,
  Flex,
  Button,
  rem,
  Badge,
  Center,
} from '@mantine/core'
import {
  IconPhoneCall,
  IconAt,
  IconEar,
  IconEarOff,
  IconEarScan,
  IconSpeakerphone,
} from '@tabler/icons-react'
import { moods } from '../constants/constants'

export default function ShareAndSearch() {
  const [sharedCreations, setSharedCreations] = useState<[]>([])
  useEffect(() => {
    console.log('search')

    const fetcher = async () => {
      const res = await fetch('/creations')

      const data = await res.json()

      if (res.ok) {
        console.log('DATA', data)
        setSharedCreations(data)
      } else console.log('ERROR', res.statusText)
    }

    fetcher()
  }, [])

  const moods = [
    { emoji: '☀️', label: 'Sunny weather' },
    { emoji: '🦓', label: 'Onsite zoo' },
    { emoji: '🌊', label: 'Sea' },
    { emoji: '🌲', label: 'Nature' },
    { emoji: '🤽', label: 'Water sports' },
  ]

  const features = moods.map((badge) => (
    <Badge variant="light" key={badge.label} leftSection={badge.emoji}>
      {badge.label}
    </Badge>
  ))
  return (
    <Container mt="sm">
      <Stack>
        {sharedCreations.map((share: any) => (
          <Paper radius="md" withBorder p="md">
            <Paper mb="sm">
              <Avatar src={share.get_avatars} size={60} radius={60} mx="auto" />
              <Text ta="center" fz="lg" fw={500} mt="md">
                {share.username}
              </Text>
            </Paper>
            <Flex mb="xs" justify="space-around">
              <Group gap={7} mt={5}>
                {features}
              </Group>
            </Flex>
            <Center>
              <iframe
                title="test"
                style={{
                  marginTop: '10px',
                  border: 0,
                  // width: '100%',
                  height: '42px',
                }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1687291876/size=small/bgcol=000000/linkcol=2292A4/track=1815572757/transparent=true/"
                seamless
              />
            </Center>
          </Paper>
        ))}
      </Stack>
    </Container>
  )
}
