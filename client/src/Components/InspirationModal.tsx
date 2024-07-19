import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from 'src/global/UserContext'
import { useDisclosure } from '@mantine/hooks'
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
  Timeline,
} from '@mantine/core'
import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
  IconEye,
  IconFileZip,
  IconTrash,
  IconScanEye,
  IconMicrophone,
  IconPlaylist,
} from '@tabler/icons-react'
import logo from '../assets/images/logo1.jpg'

import { useForm, isNotEmpty, hasLength } from '@mantine/form'
import { InspirationObjectProps } from './Forms/CreationForm'

interface InspirationModalProps {
  openModal: boolean
  handleClose: () => void
  inspirationObj: InspirationObjectProps[]
  title?: string
  buttonOptions?: string[]
  textContentOptions?: any
}

export default function InspirationModal({
  openModal,
  handleClose,
  inspirationObj,
}: InspirationModalProps) {
  const { currentUser } = useContext(UserContext)
  const navigate = useNavigate()
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
    },

    validate: {
      name:
        isNotEmpty('Please Make A Selection') &&
        hasLength({ min: 2, max: 20 }, 'Name must be 2-20 characters long'),
    },
  })

  const resolveIcon = (title: string) => {
    if (title === 'enigma') {
      return <IconScanEye size={28} />
    } else if (title === 'lyric') {
      return <IconMicrophone size={28} />
    } else return <IconPlaylist size={28} />
  }

  const handleSubmit = async () => {
    const { name } = form.getValues()
    const enigma = inspirationObj.find((obj: any) => obj.title === 'enigma')
    const chords = inspirationObj.find((obj) => obj.title === 'chords')
    const lyrics = inspirationObj.find((obj) => obj.title === 'lyrics')
    console.log('BEEP', enigma?.id, chords?.id, lyrics?.id)
    const newInspiration = {
      title: name,
      user_id: currentUser?.id,
      chord_progression_id: chords?.id,
      enigma_id: enigma?.id,
      lyric_snippet_id: lyrics?.id,
    }
    // await fetch('/inspirations', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newInspiration),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {})

    const response = await fetch('inspirations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInspiration),
    })
    const data = await response.json()
    if (response.ok) {
      form.reset()
      handleClose()
      navigate('UserProfile')
      console.log('RES', data)
    } else console.log('NO')
  }

  return (
    <>
      <Modal
        opened={openModal}
        onClose={handleClose}
        // title={title ? title : null}
        transitionProps={{
          transition: 'fade',
          duration: 600,
          timingFunction: 'linear',
        }}
      >
        <Card withBorder padding="xl" radius="md" shadow="sm">
          <Card.Section inheritPadding withBorder p="lg">
            <Avatar src={logo} size={80} radius={80} mx="auto" />
            <Text ta="center" fz="lg" fw={500} mt="sm">
              Your Unique Musical Inspiration
            </Text>
          </Card.Section>
          <Card.Section inheritPadding withBorder p="lg">
            <Timeline bulletSize={40} active={inspirationObj.length}>
              {inspirationObj && inspirationObj.length > 0
                ? inspirationObj.map((item: any, indx: any) => (
                    <Timeline.Item
                      key={indx}
                      title={item.title}
                      bullet={resolveIcon(item.title)}
                      lineVariant={
                        indx === inspirationObj.length - 2 ? 'dashed' : 'solid'
                      }
                    >
                      <Text c="dimmed" size="sm">
                        {item.description}
                      </Text>
                    </Timeline.Item>
                  ))
                : null}
            </Timeline>
          </Card.Section>

          <Card.Section inheritPadding withBorder p="lg">
            <form
              onSubmit={form.onSubmit(() => {
                handleSubmit()
              })}
            >
              <TextInput
                key={form.key('name')}
                {...form.getInputProps('name')}
                placeholder="give your inspiration a unique name..."
              />
              <Group justify="center" mt="md">
                <Button type="submit" disabled={!currentUser ? true : false}>
                  Save
                </Button>
                {!currentUser ? (
                  <Text size="xs" c="red">
                    Please login or signup to save to your profile.
                  </Text>
                ) : null}
              </Group>
            </form>
          </Card.Section>
        </Card>
      </Modal>
    </>
  )
}
