import React from 'react'
import { Blockquote, Title } from '@mantine/core'

import { lyricCategories } from '../constants/constants'
import UserAdditionsForm from './Forms/UserAdditionsForm'

export default function AddLyrics() {
  const lyricChoices = (({ name, ...object }) => object)(lyricCategories)
  const helperText = {
    label: '',
    description: '',
    placeholder: '',
  }
  //TODO remove left border
  return (
    <>
      <Blockquote
        cite=" - provide a lyric snippet based on chosen style to inspire someone's creativity"
        color="cyan"
        radius="xs"
      >
        <Title order={2} fs="italic" td="underline">
          Lyric Styles
        </Title>
      </Blockquote>
      <UserAdditionsForm
        choices={Object.values(lyricChoices)}
        type={lyricCategories.name}
        helperText={helperText}
      />
    </>
  )
}
