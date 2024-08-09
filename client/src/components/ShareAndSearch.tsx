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
            // style={{ height: '470px' }}
            key={share.id}
            onClick={() => navigate('/view-user', { state: share.user_id })}
          >
            <iframe
              title="web player"
              style={{
                border: 0,
                borderRadius: '16px',
                width: '100%',
                height: '352px',
              }}
              // src="https://bandcamp.com/EmbeddedPlayer/album=1687291876/size=large/track=1815572757"
              // src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1147193188&visual=true"
              // src="https://open.spotify.com/embed/track/61dAd09odJQ1pLareDlPpW"
              seamless
            />
          </Paper>
        ))}
      </SimpleGrid>
    </Container>
  )
}

// ;<iframe
//   style="border: 0; width: 350px; height: 470px;"
//   src="https://bandcamp.com/EmbeddedPlayer/album=1687291876/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
//   seamless
// >
//   <a href="https://thegreatnostalgic.bandcamp.com/album/the-great-nostalgic-2">
//     The Great Nostalgic by The Great Nostalgic
//   </a>
// </iframe>
