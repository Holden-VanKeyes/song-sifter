import React from 'react'
import UserAdditionsForm from './Forms/UserAdditionsForm'
import { chordCategories } from '../constants/constants'

export default function AddChords() {
  const chordChoices = (({ name, ...object }) => object)(chordCategories)
  return <UserAdditionsForm choices={Object.values(chordChoices)} />
}
