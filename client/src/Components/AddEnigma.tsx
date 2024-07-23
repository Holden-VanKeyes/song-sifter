import React from 'react'
import UserAdditionsForm from './Forms/UserAdditionsForm'
import { enigmaCategories } from '../constants/constants'

export default function AddEnigma() {
  const enigmaChoices = (({ name, ...object }) => object)(enigmaCategories)
  return <UserAdditionsForm choices={Object.values(enigmaChoices)} />
}
