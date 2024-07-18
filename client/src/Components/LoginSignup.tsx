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
} from '@mantine/core'
import {
  useForm,
  isNotEmpty,
  hasLength,
  matches,
  matchesField,
} from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'

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
  const { user, setUser } = useContext(UserContext)
  console.log('YOU', user)
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
      password:
        isNotEmpty('please enter password') &&
        matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/,
          passwordRules
        ),
      passwordCheck:
        isNotEmpty('please enter password') &&
        matches(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/,
          passwordRules
        ) &&
        matchesField('password', 'Passwords are not the same'),
    },
  })

  const handleSubmit = async () => {
    form.validate()
    const { username, password, passwordCheck } = form.getValues()

    const createUser = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        passwordConfirm: passwordCheck,
        profile_pic: `https://api.dicebear.com/8.x/notionists-neutral/svg?seed=${username}`,
      }),
    })
    const response = await createUser.json()
    if (response.error) {
      console.log('RES', response)
      setUserCreateError(
        response.exception.slice(31, response.exception.length - 1)
      )
    } else {
      console.log('Success', response)
      setUser!(response)
      console.log('NEW USER', user)
      handleClose()
      // navigate('/UserProfile')
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
            handleSubmit()
          })}
        >
          <Stack>
            <TextInput
              label="Name"
              key={form.key('username')}
              {...form.getInputProps('username')}
              placeholder="username"
            />
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
