import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../global/UserContext'
import {
  Card,
  Overlay,
  Button,
  Text,
  rem,
  Container,
  Group,
  Avatar,
  Stack,
  Radio,
  Textarea,
  Center,
  Blockquote,
  ActionIcon,
  Flex,
  UnstyledButton,
  AspectRatio,
  Notification,
  Modal,
  Title,
} from '@mantine/core'
import { useForm, isNotEmpty, hasLength } from '@mantine/form'
import { IconArrowAutofitUp, IconDiamond } from '@tabler/icons-react'
import logo from '../../assets/images/logo1.jpg'
import css from '../UserAdditions.module.css'

//TODO - need 4 boxes for chords to make easier (one for each chord) then join with dash onSubmit

interface HelperTextProps {
  label: string
  description: string
  placeholder: string
}

interface ChoicesProps {
  choices: string[]
  helperText: HelperTextProps
  type?: string
}

export default function UserAdditionsForm({
  choices,
  type,
  helperText,
}: ChoicesProps) {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      userTextInput: '',
    },
    onValuesChange: (values) => {
      // ✅ This will be called on every form values change
    },
    validate: {
      userTextInput:
        isNotEmpty('Please Make A Selection') &&
        hasLength({ min: 10 }, 'Value must have 10 or more characters'),
    },
  })

  const [selectedCategory, setSelectedCategory] = useState('')
  const [opened, setOpened] = useState(false)
  const { currentUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const { userTextInput } = form.getValues()
    const userAddition = {
      category: selectedCategory,
      author: currentUser.username,
      description: userTextInput,
    }
    const res = await fetch(`/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userAddition),
    })
    const data = await res.json()

    if (res.status === 200) {
      form.reset()
      setOpened(true)
      console.log('success', res.statusText)
    } else console.log('ERROR', res.statusText)
  }

  return (
    <Container m="lg">
      <Stack>
        {choices.map((category: string, indx: number) => {
          const splitString = category.split('-')

          return (
            <div key={indx}>
              <Group wrap="nowrap">
                <Radio
                  iconColor="dark.8"
                  color="cyan.2"
                  value={category}
                  onChange={() => {
                    setSelectedCategory(category)
                  }}
                  name="checked"
                  defaultChecked
                />
                <Avatar
                  src={`https://api.dicebear.com/9.x/shapes/svg?seed=${category}`}
                  size={94}
                  radius="md"
                />
                <Flex
                  direction="column"
                  pl={type === 'enigmas' ? '0.5rem' : '2rem'}
                >
                  {splitString.map((item) => (
                    <Text fz="xs" tt="uppercase" fw={700}>
                      {item}
                    </Text>
                  ))}
                </Flex>
              </Group>
            </div>
          )
        })}
        <form onSubmit={form.onSubmit(() => handleSubmit())}>
          <Textarea
            mt="md"
            label={helperText.label}
            key={form.key('userTextInput')}
            {...form.getInputProps('userTextInput')}
            description={helperText.description}
            placeholder={helperText.placeholder}
            rightSection={
              <ActionIcon
                size={35}
                radius="sm"
                variant="filled"
                mr="md"
                type="submit"
                color="rgb(140 233 242 )"
              >
                <IconArrowAutofitUp
                  style={{ width: rem(20), height: rem(20), color: 'black' }}
                  stroke={2}
                />
              </ActionIcon>
            }
          />
        </form>
      </Stack>

      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false)
          navigate('/UserProfile')
        }}
        centered
        withCloseButton={false}
      >
        <Group justify="center">
          <Title order={4}>We appreciate your contribution!</Title>
          <Avatar src={logo} size={80} radius={80} mx="auto" />
        </Group>
      </Modal>
    </Container>
  )
}
