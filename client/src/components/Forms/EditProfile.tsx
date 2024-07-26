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
  Center,
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
} from '@mantine/core'
import { useForm, isNotEmpty } from '@mantine/form'
import { avatarOptions } from 'src/constants/constants'
import { countryArray } from 'src/constants/constants'

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
]

interface UsersAvatarProps {
  style: string
}

export default function EditProfile() {
  const { currentUser } = useContext(UserContext)
  const usersCurrentAvatar = avatarOptions.find((avatar) =>
    currentUser.profile_pic.includes(avatar.style)
  )
  const [value, setValue] = useState<string | null>(null)
  const [search, setSearch] = useState('')
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
      username: '',
      instrument: '',
      favSong: '',
      quote: '',
      underRadar: '',
    },
    onValuesChange: (values) => {
      // ✅ This will be called on every form values change
    },

    validate: {
      instrument: isNotEmpty('Please Make A Selection'),
      favSong: isNotEmpty('Please Make A Selection'),
      quote: isNotEmpty('Please Make A Selection'),
      underRadar: isNotEmpty('Please Make A Selection'),
    },
  })

  const shouldFilterOptions = groceries.every((item) => item !== search)
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase().trim())
      )
    : groceries

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ))

  console.log(countryArray)

  return (
    <>
      <form>
        <Stack gap="lg">
          <Combobox
            store={combobox}
            withinPortal={false}
            onOptionSubmit={(val) => {
              setValue(val)
              setSearch(val)
              combobox.closeDropdown()
            }}
          >
            <Combobox.Target>
              <InputBase
                rightSection={<Combobox.Chevron />}
                value={search}
                onChange={(event) => {
                  combobox.openDropdown()
                  combobox.updateSelectedOptionIndex()
                  setSearch(event.currentTarget.value)
                }}
                onClick={() => combobox.openDropdown()}
                onFocus={() => combobox.openDropdown()}
                onBlur={() => {
                  combobox.closeDropdown()
                  setSearch(value || '')
                }}
                placeholder="Country"
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
              key={form.key('username')}
              {...form.getInputProps('username')}
              //   placeholder="give your inspiration a unique name..."
            />
            <TextInput
              key={form.key('instrument')}
              {...form.getInputProps('instrument')}
              //   placeholder="give your inspiration a unique name..."
            />
            <TextInput
              key={form.key('favSong')}
              {...form.getInputProps('favSong')}
              //   placeholder="give your inspiration a unique name..."
            />
            <TextInput
              key={form.key('quote')}
              {...form.getInputProps('quote')}
              //   placeholder="give your inspiration a unique name..."
            />
            <TextInput
              key={form.key('underRadar')}
              {...form.getInputProps('underRadar')}
              //   placeholder="give your inspiration a unique name..."
            />
          </Combobox>
          <Button onClick={() => setOpened(true)}>Change Avatar</Button>
        </Stack>
        <Modal
          centered
          opened={opened}
          onClose={() => setOpened(false)}
          title="Choose an avatar type"
        >
          <Text c="dimmed" size="xs" fs="italic">
            avatars are generated at random from selected style
          </Text>

          <Grid>
            {avatarOptions.map((option, indx) => (
              <Grid.Col span={4}>
                <Avatar
                  key={indx}
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
