import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { UserContext } from 'src/global/UserContext'
import { useNavigate } from 'react-router-dom'
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
  Badge,
  Container,
  rem,
  useMantineColorScheme,
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
import PleaseLogin from './PleaseLogin'
import ShareMusicForm from './Forms/ShareMusicForm'

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState<string | null>('thoughts')
  const [loginAlert, setLoginAlert] = useState(false)
  const [editFormOpened, setEditFormOpened] = useState(false)
  const [shareMusicForm, setShareMusicForm] = useState(false)
  const colorScheme = useMantineColorScheme().colorScheme
  const navigate = useNavigate()

  const { state } = useLocation()
  const { currentUser } = useContext(UserContext)
  const colorMatch = currentUser
    ? `#${currentUser.profile_pic?.slice(currentUser.profile_pic.length - 6)}`
    : '#44c4f2f5'

  const handleClose = () => setEditFormOpened(false)

  const handleCloseAlert = () => {
    setLoginAlert(false)
    navigate('/')
  }

  const handleShare = async () => {
    setShareMusicForm(true)
  }

  useEffect(() => {
    if (!currentUser) {
      setLoginAlert(true)
    } else return
  }, [currentUser])

  return (
    <>
      {currentUser ? (
        <>
          <Paper radius="md" bg="var(--mantine-color-body)" mb="md" mt="sm">
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
                    setEditFormOpened(true)
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
          </Paper>
          <Tabs
            value={activeTab}
            onChange={setActiveTab}
            m="md"
            color={`${colorMatch}`}
          >
            <Tabs.List>
              <Tabs.Tab value="thoughts">Thoughts</Tabs.Tab>
              <Tabs.Tab value="saves">Saves</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="saves">
              <SavedInspos handleShare={handleShare} />
            </Tabs.Panel>
            <Tabs.Panel value="thoughts" p="lg">
              <Stack mt="lg" gap={40}>
                <Blockquote
                  cite={`- ${
                    currentUser.fav_song_artist
                      ? currentUser.fav_song_artist
                      : 'edit your profile'
                  }`}
                  color="teal"
                  radius="lg"
                  style={{
                    borderInlineEnd: '3px solid aquamarine',
                  }}
                  styles={{
                    icon: {
                      width: '100%',
                      justifyContent: 'flex-start',
                      height: rem(20),
                    },
                  }}
                  icon={
                    <Badge color="teal" variant="outline" radius="md">
                      On Repeat
                    </Badge>
                  }
                >
                  {currentUser?.fav_song
                    ? currentUser.fav_song
                    : "Tell us a song you've got on heavy rotation"}
                </Blockquote>

                <Blockquote
                  cite={`- ${
                    currentUser.quote_artist
                      ? currentUser.quote_artist
                      : 'change your deets'
                  }`}
                  style={{
                    borderInlineEnd: '3px solid crimson',
                  }}
                  color="rgba(255, 144, 92, 1)"
                  radius="lg"
                  styles={{
                    icon: {
                      width: '100%',
                      justifyContent: 'flex-start',
                      height: rem(20),
                    },
                  }}
                  icon={
                    <Badge
                      color="rgba(255, 144, 92, 1)"
                      variant="outline"
                      radius="md"
                    >
                      Wise Words
                    </Badge>
                  }
                >
                  {currentUser?.quote
                    ? currentUser.quote
                    : 'Drop us your favorite lyric or creative tidbit'}
                </Blockquote>

                <Blockquote
                  cite={`< ${
                    currentUser.under_radar_play_count
                      ? currentUser.under_radar_play_count +
                        ' - monthly listeners'
                      : 'update your info'
                  } `}
                  color="cyan"
                  radius="lg"
                  style={{
                    borderInlineEnd: '3px solid cornflowerblue',
                  }}
                  styles={{
                    icon: {
                      width: '100%',
                      justifyContent: 'flex-start',
                      height: rem(20),
                    },
                  }}
                  icon={
                    <Badge color="cyan" variant="outline" radius="md">
                      Under Rated
                    </Badge>
                  }
                >
                  {currentUser?.under_radar
                    ? currentUser.under_radar
                    : 'Link your favorite under the radar artist'}
                </Blockquote>
              </Stack>
            </Tabs.Panel>
          </Tabs>
          <Modal
            opened={editFormOpened}
            onClose={() => setEditFormOpened(false)}
            centered
            title="Edit Your Deets"
          >
            <EditProfile handleClose={handleClose} />
          </Modal>
          <Modal
            opened={shareMusicForm}
            onClose={() => setShareMusicForm(false)}
            centered
          >
            <ShareMusicForm />
          </Modal>
        </>
      ) : (
        <PleaseLogin
          loginAlert={loginAlert}
          handleCloseAlert={handleCloseAlert}
        />
      )}
    </>
  )
}
