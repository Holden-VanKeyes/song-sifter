import React from 'react'
import { Blockquote, Title } from '@mantine/core'
import UserAdditionsForm from './Forms/UserAdditionsForm'
import { enigmaCategories } from '../constants/constants'

export default function AddEnigma() {
  const enigmaChoices = (({ name, ...object }) => object)(enigmaCategories)
  const helperText = {
    label: '',
    description: '',
    placeholder: '',
  }
  return (
    <>
      <Blockquote
        cite=" - suggest a unique way someone can think outside of the box musically speaking"
        color="teal"
        radius="xs"
      >
        <Title order={2} fs="italic" td="underline">
          Enigma Moods
        </Title>
      </Blockquote>
      <UserAdditionsForm
        choices={Object.values(enigmaChoices)}
        type={enigmaCategories.name}
        helperText={helperText}
      />
    </>
  )
}
