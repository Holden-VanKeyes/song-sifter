import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  SimpleGrid,
  useMantineColorScheme,
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
  const navigate = useNavigate()
  const colorScheme = useMantineColorScheme().colorScheme
  const [sharedCreations, setSharedCreations] = useState<[]>([])
  const playerColor = colorScheme === 'light' ? 'ffffff' : '000000'

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch('/creations')

      const data = await res.json()

      if (res.ok) {
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
    <Container mt="sm" size="xl">
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {sharedCreations.map((share: any) => (
          <Paper
            radius="md"
            withBorder
            p="md"
            key={share.id}
            onClick={() => navigate('/view-user', { state: share.user_id })}
          >
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
            <Flex justify="center">
              <iframe
                title="web player"
                style={{
                  marginTop: '10px',
                  border: 0,

                  height: '42px',
                }}
                src={`https://bandcamp.com/EmbeddedPlayer/album=1687291876/size=small/bgcol=${playerColor}/linkcol=2292A4/track=1815572757/transparent=true/`}
                seamless
              />
            </Flex>
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  )
}
