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

  const resolveIcon = (title: string) => {
    if (title === 'enigma') {
      return <IconScanEye size={28} />
    } else if (title === 'lyric') {
      return <IconMicrophone size={28} />
    } else return <IconPlaylist size={28} />
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
          <Card.Section inheritPadding withBorder p="lg">
            <Group justify="center">
              {buttonOptions
                ? buttonOptions.map((btn) => <Button>{`${btn}`}</Button>)
                : null}
            </Group>
          </Card.Section>
        </Card>
      </Modal>
    </>
  )
}
