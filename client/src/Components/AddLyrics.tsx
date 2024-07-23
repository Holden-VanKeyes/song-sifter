import React from 'react'
import {
  Card,
  Overlay,
  Button,
  Text,
  rem,
  Container,
  Group,
  Avatar,
} from '@mantine/core'
import css from './UserAdditions.module.css'
import abstract from '../assets/images/observational.jpg'
import { lyricCategories } from '../constants/constants'
import UserAdditionsForm from './Forms/UserAdditionsForm'

export default function AddLyrics() {
  const lyricChoices = (({ name, ...object }) => object)(lyricCategories)

  return <UserAdditionsForm choices={Object.values(lyricChoices)} />
}
