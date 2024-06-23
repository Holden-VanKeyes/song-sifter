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
import { useForm, isNotEmpty, hasLength } from '@mantine/form'

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
  const passwordRules = (
    <>
      At least 10 characters long Contains one special character Contains one
      capital letter
    </>
  )
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
      passwordCheck: '',
    },

    validate: {
      //   username: (value) => (value.length > 5 ? 'you did it wrong' : null),
      username:
        isNotEmpty('please enter a username') &&
        hasLength(
          { min: 2, max: 10 },
          'username must be between 2 and 10 characters'
        ),
      //   password: (value) => (value.length > 10 ? passwordRules : null),
    },
  })

  const handleSubmit = () => {
    console.log('HEY')

    form.validate()
  }
  return (
    <Modal
      opened={openModal}
      onClose={() => {
        form.reset()
        handleClose()
      }}
      title={formType === 'signup' ? 'Sign Up' : 'Sign In'}
    >
      <Card withBorder padding="xl" radius="md" shadow="sm">
        <form
          onSubmit={form.onSubmit((e) => {
            console.log(e)
            handleSubmit()
          })}
        >
          <Stack>
            <TextInput
              key={form.key('username')}
              {...form.getInputProps('username')}
              placeholder="username"
            />
            <TextInput
              key={form.key('password')}
              {...form.getInputProps('password')}
              placeholder="password"
            />
            {formType === 'signup' ? (
              <TextInput
                key={form.key('passwordCheck')}
                {...form.getInputProps('passwordCheck')}
                placeholder="re-type password"
              />
            ) : null}
            <Button type="submit" variant="outline" color="cyan">
              Go
            </Button>
          </Stack>
        </form>
      </Card>
    </Modal>
  )
}
