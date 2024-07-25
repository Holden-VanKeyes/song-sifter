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

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState<string | null>('saves')

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
          {/* <Box m="md"> */}
          <SavedInspos /> {/* </Box> */}
        </Tabs.Panel>
        <Tabs.Panel value="thoughts">
          <Box m="md">
            <div>HELLO</div>
          </Box>
        </Tabs.Panel>
      </Tabs>
    </>
  )
}
