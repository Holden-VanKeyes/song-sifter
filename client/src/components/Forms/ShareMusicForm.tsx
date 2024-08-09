import React from 'react'
import {
  Modal,
  Button,
  Stack,
  Group,
  Card,
  Avatar,
  Text,
  ActionIcon,
  TextInput,
  Textarea,
  Box,
} from '@mantine/core'
import { useForm, isNotEmpty } from '@mantine/form'

export default function ShareMusicForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      musicLink: '',
    },
    onValuesChange: (values) => {
      // ✅ This will be called on every form values change
    },
  })

  // src="https://bandcamp.com/EmbeddedPlayer/album=1687291876/size=large/track=1815572757"
  // src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1147193188&visual=true"
  // src="https://open.spotify.com/embed/track/61dAd09odJQ1pLareDlPpW"

  const resolveEmbedCode = async (embed: string) => {
    if (!embed.includes('src')) {
      console.log('NO SRC')
      return
    }
    if (embed.includes('soundcloud')) {
      console.log('yesvSOUND')
    } else if (embed.includes('bandcamp')) {
      console.log('yes BAND')
    } else if (embed.includes('spotify')) {
      console.log('yes SPOT')
    } else console.log('ERROR')
  }

  const handleSubmit = async () => {
    const values = form.getValues()
    resolveEmbedCode(values.musicLink)
    console.log(values)
  }
  return (
    <Box p="sm">
      <form onSubmit={form.onSubmit(() => handleSubmit())}>
        <Stack>
          <TextInput
            description="Song Title"
            key={form.key('title')}
            {...form.getInputProps('title')}
            //   placeholder={currentUser.fav_song}
          />
          <Textarea
            description="Embed Code"
            key={form.key('musicLink')}
            {...form.getInputProps('musicLink')}
            placeholder="...Bandcamp, Spotify, or Soundcloud links only"
          />
          <Button type="submit" variant="outline" color="gray">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  )
}
