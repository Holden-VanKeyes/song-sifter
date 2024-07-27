import React, { useContext, useState } from 'react'
import { UserContext } from '../../global/UserContext'
import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  rem,
  Container,
  Image,
  Stack,
  NativeSelect,
  Select,
  Button,
  UnstyledButton,
  NumberInput,
  Flex,
  Modal,
  Input,
  TextInput,
  Combobox,
  InputBase,
  useCombobox,
  Avatar,
  Grid,
  Paper,
  SimpleGrid,
} from '@mantine/core'
import { useForm, isNotEmpty } from '@mantine/form'
import { avatarOptions } from 'src/constants/constants'
import { countries } from 'src/constants/countries'

interface EditProfileProps {
  handleClose: () => void
}

export default function EditProfile({ handleClose }: EditProfileProps) {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const usersCurrentAvatar = avatarOptions.find((avatar) =>
    currentUser.profile_pic.includes(avatar.style)
  )
  const [value, setValue] = useState<string | null>(null)
  const [countrySearch, setCountrySearch] = useState(
    currentUser.country ? currentUser.country : ''
  )
  const [opened, setOpened] = useState(false)
  const [selectedAvatar, setSelectedAvatar] = useState(
    usersCurrentAvatar!.style
  )
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      country: currentUser.country,
      username: currentUser.username,
      instrument: '',
      favSong: currentUser.fav_song,
      favSongArtist: currentUser.fav_song_artist,
      favSongLink: currentUser.fav_song_link,
      quote: currentUser.quote,
      quoteArtist: currentUser.quote_artist,
      underRadar: currentUser.under_radar,
      underRadarPlayCount: currentUser.under_radar_play_count,
      underRadarLink: currentUser.under_radar_link,
    },
    onValuesChange: (values) => {
      // ✅ This will be called on every form values change
    },

    validate: {
      country: isNotEmpty('Please Make A Selection'),
      username: isNotEmpty('Please Make A Selection'),
      favSong: isNotEmpty('Please Make A Selection'),
      favSongArtist: isNotEmpty('Please Make A Selection'),
      favSongLink: isNotEmpty('Please Make A Selection'),
      quote: isNotEmpty('Please Make A Selection'),
      quoteArtist: isNotEmpty('Please Make A Selection'),
      underRadar: isNotEmpty('Please Make A Selection'),
      underRadarPlayCount: isNotEmpty('Please Make A Selection'),
      underRadarLink: isNotEmpty('Please Make A Selection'),
    },
  })
  const countryArray = []
  countryArray.push(
    Object.values(countries[0]).map((item) => item.name + ' ' + item.emoji)
  )

  const shouldFilterOptions = countryArray[0].every(
    (item) => item !== countrySearch
  )

  const filteredOptions =
    shouldFilterOptions && countryArray.length > 0
      ? countryArray[0]?.filter((item) =>
          item.toLowerCase().includes(countrySearch.toLowerCase().trim())
        )
      : countryArray[0]

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ))

  const handleSubmit = async () => {
    // console.log(form.getValues(), selectedAvatar, countrySearch)
    const {
      username,
      favSong,
      favSongArtist,
      favSongLink,
      quote,
      quoteArtist,
      underRadar,
      underRadarLink,
      underRadarPlayCount,
    } = form.getValues()
    const avatarUrl = `https://api.dicebear.com/8.x/${selectedAvatar}/svg?seed=${
      username ? username : currentUser.username
    }}`

    const userUpdates = {
      username: username,
      fav_song: favSong,
      fav_song_artist: favSongArtist,
      fav_song_link: favSongLink,
      quote: quote,
      quote_artist: quoteArtist,
      under_radar: underRadar,
      under_radar_play_count: underRadarPlayCount,
      under_radar_link: underRadarLink,
      country: countrySearch,
      profile_pic: avatarUrl,
    }

    const res = await fetch(`/users/${currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userUpdates),
    })

    if (res.ok) {
      const data = await res.json()
      setCurrentUser!(data)
      form.reset()
      handleClose()

      console.log('UPDATED USER', data)
    } else console.log('ERROR', res.statusText)
  }

  return (
    <>
      <form onSubmit={form.onSubmit(() => handleSubmit())}>
        <Stack gap="lg">
          <Combobox
            store={combobox}
            withinPortal={false}
            onOptionSubmit={(val) => {
              setValue(val)
              setCountrySearch(val)
              combobox.closeDropdown()
            }}
          >
            <Combobox.Target>
              <InputBase
                rightSection={<Combobox.Chevron />}
                value={countrySearch}
                onChange={(event) => {
                  combobox.openDropdown()
                  combobox.updateSelectedOptionIndex()
                  setCountrySearch(event.currentTarget.value)
                }}
                onClick={() => combobox.openDropdown()}
                onFocus={() => combobox.openDropdown()}
                onBlur={() => {
                  combobox.closeDropdown()
                  setCountrySearch(value || '')
                }}
                placeholder="Country"
                description="country"
                rightSectionPointerEvents="none"
              />
            </Combobox.Target>

            <Combobox.Dropdown>
              <Combobox.Options>
                {options.length > 0 ? (
                  options
                ) : (
                  <Combobox.Empty>Nothing found</Combobox.Empty>
                )}
              </Combobox.Options>
            </Combobox.Dropdown>
            <TextInput
              description="username"
              key={form.key('username')}
              {...form.getInputProps('username')}
              placeholder="New username"
            />
            <Grid columns={2}>
              <Grid.Col span={1}>
                <TextInput
                  description="song in heavy rotation"
                  key={form.key('favSong')}
                  {...form.getInputProps('favSong')}
                  //   placeholder={currentUser.fav_song}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <TextInput
                  description="song artist"
                  key={form.key('favSongArtist')}
                  {...form.getInputProps('favSongArtist')}
                  // placeholder={currentUser.fav_song}
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <TextInput
                  description="song link"
                  key={form.key('favSongLink')}
                  {...form.getInputProps('favSongLink')}
                  //   placeholder={currentUser.quote}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <TextInput
                  description="inspiring lyric or quote"
                  key={form.key('quote')}
                  {...form.getInputProps('quote')}
                  //   placeholder={currentUser.quote}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <TextInput
                  description="quote author"
                  key={form.key('quoteArtist')}
                  {...form.getInputProps('quoteArtist')}
                  //   placeholder={currentUser.quote}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <TextInput
                  description="an under the radar artist"
                  key={form.key('underRadar')}
                  {...form.getInputProps('underRadar')}
                  //   placeholder={currentUser.under_radar}
                />
              </Grid.Col>
              <Grid.Col span={1}>
                <NumberInput
                  description="their monthly listeners"
                  inputSize={'18'}
                  step={5000}
                  placeholder="monthly listeners"
                  prefix="< "
                  defaultValue={1000}
                  min={1000}
                  max={50000}
                  key={form.key('underRadarPlayCount')}
                  {...form.getInputProps('underRadarPlayCount')}
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <TextInput
                  description="artist link"
                  key={form.key('underRadarLink')}
                  {...form.getInputProps('underRadarLink')}
                  //   placeholder={currentUser.quote}
                />
              </Grid.Col>
            </Grid>

            {/* <TextInput
              key={form.key('instrument')}
              {...form.getInputProps('instrument')}
              placeholder="Share your main instrument"
            /> */}
          </Combobox>
          <Group justify="center">
            <Button
              color="teal"
              variant="outline"
              leftSection={<Avatar size={25} src={currentUser.profile_pic} />}
              onClick={() => setOpened(true)}
            >
              Edit Avatar
            </Button>
            <Button
              type="submit"
              color="teal"
              variant="outline"
              //   onClick={() => setOpened(true)}
            >
              Submit Changes
            </Button>
          </Group>
        </Stack>
        <Modal
          centered
          opened={opened}
          onClose={() => setOpened(false)}
          title="Choose an avatar type"
        >
          <Text c="dimmed" size="xs" fs="italic">
            avatars will be generated at random from selected style
          </Text>

          <Grid>
            {avatarOptions.map((option, indx) => (
              <Grid.Col span={4} key={indx}>
                <Avatar
                  src={option.url}
                  name={option.style}
                  size={70}
                  radius={80}
                  style={{
                    border:
                      option.style === selectedAvatar
                        ? '3px solid teal'
                        : undefined,
                  }}
                  //   mx="auto"
                  onClick={() => setSelectedAvatar(option.style)}
                  m="lg"
                />
              </Grid.Col>
            ))}
          </Grid>
        </Modal>
      </form>
    </>
  )
}
