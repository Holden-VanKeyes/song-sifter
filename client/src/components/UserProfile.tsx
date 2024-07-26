import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { UserContext } from 'src/global/UserContext'
import {
  Avatar,
  Text,
  Button,
  Paper,
  Box,
  Group,
  ActionIcon,
  Card,
  Center,
  Blockquote,
  Stack,
  Flex,
  Tabs,
  Modal,
} from '@mantine/core'
import {
  IconScanEye,
  IconMicrophone,
  IconPlaylist,
  IconChevronRight,
  IconChevronLeft,
  IconPencil,
} from '@tabler/icons-react'
import { SavedInspos } from './SavedInspos'
import css from './UserProfile.module.css'
import EditProfile from './Forms/EditProfile'

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState<string | null>('saves')
  const [opened, setOpened] = useState(false)

  const { state } = useLocation()
  const { currentUser } = useContext(UserContext)
  const colorMatch = currentUser
    ? `#${currentUser.profile_pic?.slice(currentUser.profile_pic.length - 6)}`
    : '#44c4f2f5'

  return (
    <>
      <Paper radius="md" p="lg" bg="var(--mantine-color-body)" mb="md" mt="sm">
        <Center>
          <div className={css.avatar}>
            <Avatar
              src={currentUser?.profile_pic}
              size={120}
              radius={120}
              mx="auto"
            />

            <ActionIcon
              style={{ position: 'absolute', right: 0 }}
              radius="lg"
              variant="white"
              onClick={() => {
                console.log('HIT', opened)
                setOpened(true)
              }}
            >
              <IconPencil />
            </ActionIcon>
          </div>
        </Center>

        <Text ta="center" fz="lg" fw={500} mt="md">
          {currentUser?.username}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          {currentUser?.email}
        </Text>
        {/* <Group justify="center">
          <Button variant="default" mt="md">
            Thoughts
          </Button>
          <Button variant="default" mt="md">
            Saves
          </Button>
        </Group> */}
      </Paper>
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        m="md"
        color={`${colorMatch}`}
      >
        <Tabs.List>
          <Tabs.Tab value="saves">Saves</Tabs.Tab>
          <Tabs.Tab value="thoughts">Thoughts</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="saves">
          <SavedInspos />
        </Tabs.Panel>
        <Tabs.Panel value="thoughts">
          <Stack mt="lg">
            <Blockquote
              color="teal"
              radius="lg"
              style={{
                borderInlineEnd: '3px solid aquamarine',
              }}
            >
              hey heye hey
            </Blockquote>

            <Blockquote
              style={{
                borderInlineEnd: '3px solid crimson',
              }}
              color="rgba(255, 144, 92, 1)"
              radius="lg"
            >
              hey heye hey
            </Blockquote>

            <Blockquote
              color="cyan"
              radius="lg"
              style={{
                borderInlineEnd: '3px solid cornflowerblue',
              }}
            >
              hey heye hey
            </Blockquote>
          </Stack>
        </Tabs.Panel>
      </Tabs>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        title="Edit Your Deets"
      >
        <EditProfile />
      </Modal>
    </>
  )
}
