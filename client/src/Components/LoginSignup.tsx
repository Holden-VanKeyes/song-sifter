import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from 'src/global/UserContext'
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
  PasswordInput,
  rem,
} from '@mantine/core'
import {
  useForm,
  isNotEmpty,
  hasLength,
  matches,
  matchesField,
  isEmail,
} from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { IconSwitchHorizontal, IconLogout, IconAt } from '@tabler/icons-react'

interface LoginSignupProps {
  openModal: boolean
  handleClose: () => void
  formType: string
}

export default function LoginSignup({
  openModal,
  handleClose,
  formType,
}: LoginSignupProps) {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const [userCreateError, setUserCreateError] = useState('')
  const [visible, { toggle }] = useDisclosure(false)
  const navigate = useNavigate()
  const passwordRules = (
    <>
      Password Rules: <br />
      - Between 7 & 20 characters long
      <br /> - Contains one special character <br /> - Contains one number
    </>
  )
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordCheck: '',
    },
    // onValuesChange: (values) => {
    //   const username = values.username

    // },

    validate: {
      username:
        isNotEmpty('please enter a username') &&
        hasLength(
          { min: 5, max: 15 },
          'username must be between 5 and 10 characters'
        ),
      email:
        formType === 'signup' ? isEmail('Invalid email format') : undefined,
      password:
        isNotEmpty('please enter password') &&
        matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/,
          passwordRules
        ),
      passwordCheck:
        formType === 'signup'
          ? isNotEmpty('please enter password') &&
            matches(
              /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/,
              passwordRules
            ) &&
            matchesField('password', 'Passwords are not the same')
          : undefined,
    },
  })

  const handleSubmitSignup = async () => {
    const { username, email, password, passwordCheck } = form.getValues()
    const createUser = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        passwordConfirm: passwordCheck,
        profile_pic: `https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${username}`,
      }),
    })
    const response = await createUser.json()
    if (response.error) {
      setUserCreateError(
        response.exception.slice(31, response.exception.length - 1)
      )
    } else {
      setCurrentUser!(response)

      handleClose()
      // navigate('/UserProfile')
    }
  }

  const handleSubmitLogin = async () => {
    const { username, password } = form.getValues()
    const session = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    const response = await session.json()
    if (response.error) {
      setUserCreateError(response.error)
    } else {
      setCurrentUser!(response)
      handleClose()
    }
  }
  return (
    <Modal
      opened={openModal}
      onClose={() => {
        if (visible) {
          toggle()
        }
        form.reset()
        setUserCreateError('')
        handleClose()
      }}
      title={formType === 'signup' ? 'Sign Up' : 'Sign In'}
    >
      <Card withBorder padding="xl" radius="md" shadow="sm">
        <form
          onSubmit={form.onSubmit(() => {
            if (formType === 'signup') {
              handleSubmitSignup()
            } else handleSubmitLogin()
          })}
        >
          <Stack>
            <TextInput
              label="Name"
              key={form.key('username')}
              {...form.getInputProps('username')}
              placeholder="username"
            />
            {formType === 'signup' ? (
              <TextInput
                label="Email"
                key={form.key('email')}
                {...form.getInputProps('email')}
                placeholder="email"
                rightSectionPointerEvents="none"
                leftSection={
                  <IconAt style={{ width: rem(16), height: rem(16) }} />
                }
              />
            ) : null}

            <PasswordInput
              label="Password"
              key={form.key('password')}
              {...form.getInputProps('password')}
              visible={visible}
              onVisibilityChange={toggle}
              placeholder="..."
            />
            {formType === 'signup' ? (
              <PasswordInput
                label="Confirm Password"
                key={form.key('passwordCheck')}
                {...form.getInputProps('passwordCheck')}
                visible={visible}
                onVisibilityChange={toggle}
                placeholder="..."
              />
            ) : null}
            <Button type="submit" variant="outline" color="cyan">
              Go
            </Button>
            {userCreateError.length > 0 ? (
              <Text c="red">{userCreateError}</Text>
            ) : null}
          </Stack>
        </form>
      </Card>
    </Modal>
  )
}
