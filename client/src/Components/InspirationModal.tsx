import React, { useState } from 'react'
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
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
    },

    validate: {
      title:
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

  const handleSubmit = () => {
    const { title } = form.getValues()
    // const newInspiration = {
    //   title: title,
    //       // user_id: currentUser.id,
    //       chord_progression_id: randomChords.id,
    //       enigma_id: randomEnigma.id,
    //       lyric_snippet_id: randomLyric.id,
    // }
  }
  console.log('Obj', inspirationObj)
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
            {/* <Timeline bulletSize={40} active={textContentOptions.length}>
              {textContentOptions && textContentOptions.length > 0
                ? textContentOptions.map((item: any, indx: any) => (
                    <Timeline.Item
                      key={indx}
                      title={item.title}
                      bullet={resolveIcon(item.title)}
                      lineVariant={
                        indx === textContentOptions.length - 2
                          ? 'dashed'
                          : 'solid'
                      }
                    >
                      <Text c="dimmed" size="sm">
                        {item.value}
                      </Text>
                    </Timeline.Item>
                  ))
                : null}
            </Timeline> */}
          </Card.Section>

          <Card.Section inheritPadding withBorder p="lg">
            <form
              onSubmit={form.onSubmit(() => {
                handleSubmit()
              })}
            >
              <TextInput
                key={form.key('title')}
                {...form.getInputProps('title')}
                placeholder="give your inspiration a unique name..."
              />
              <Group justify="center" mt="md">
                <Button type="submit">Save</Button>
              </Group>
            </form>
          </Card.Section>
        </Card>
      </Modal>
    </>
  )
}
