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

interface CustomModalProps {
  openModal: boolean
  handleClose: () => void
  title?: string
  buttonOptions?: string[]
  textContentOptions?: any
}

export default function CustomModal({
  openModal,
  handleClose,
  title,
  buttonOptions,
  textContentOptions,
}: CustomModalProps) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
    },

    validate: {
      title:
        isNotEmpty('Please Make A Selection') &&
        hasLength({ min: 2, max: 10 }, 'Name must be 4-20 characters long'),
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
    form.validate()
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
              {title ? title : null}
            </Text>
          </Card.Section>
          <Card.Section inheritPadding withBorder p="lg">
            <Timeline bulletSize={40} active={textContentOptions.length}>
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
            </Timeline>
          </Card.Section>
          {/* <Card.Section inheritPadding withBorder p="lg">
            <Group justify="center">
              {buttonOptions
                ? buttonOptions.map((btn) => (
                    <Button
                      onClick={
                        btn === 'Save'
                          ? () => setSecondaryModal(true)
                          : () => handleClose()
                      }
                    >{`${btn}`}</Button>
                  ))
                : null}
            </Group>
          </Card.Section> */}
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
                {buttonOptions
                  ? buttonOptions.map((btn) => (
                      <Button
                        type={btn === 'Save' ? 'submit' : 'button'}
                      >{`${btn}`}</Button>
                    ))
                  : null}
              </Group>
            </form>
          </Card.Section>
        </Card>
      </Modal>
    </>
  )
}
