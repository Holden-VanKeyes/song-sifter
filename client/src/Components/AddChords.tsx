import React from 'react'
import { Blockquote, Title } from '@mantine/core'
import UserAdditionsForm from './Forms/UserAdditionsForm'
import { chordCategories } from '../constants/constants'

export default function AddChords() {
  const chordChoices = (({ name, ...object }) => object)(chordCategories)

  const helperText = {
    label: '',
    description:
      'please shorthand naming (min for minor, dim for diminished etc)',
    placeholder: 'i.e. Amin - Bdim - Amin(b13)',
  }
  return (
    <>
      <Blockquote
        cite=" - submit a 4-chord progression based on mood selection"
        color="rgba(255, 144, 92, 1)"
        radius="xs"
      >
        <Title order={2} fs="italic" td="underline">
          Chord Categories
        </Title>
      </Blockquote>
      <UserAdditionsForm
        choices={Object.values(chordChoices)}
        type={chordCategories.name}
        helperText={helperText}
      />
    </>
  )
}
