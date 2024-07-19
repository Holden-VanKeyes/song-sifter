import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from 'src/global/UserContext'
import { Avatar, Text, Button, Paper } from '@mantine/core'

export default function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const [userInspirations, setUserInspirations] = useState([])

  useEffect(() => {
    try {
      fetch(`/user_inspirations?user_id=${currentUser?.id}`)
        .then((response) => response.json())
        .then((data) => {
          setUserInspirations(data)
        })
    } catch (error) {
      console.log('ERROR', error)
    }
  }, [])

  console.log(userInspirations)
  return (
    <Paper radius="md" p="lg" bg="var(--mantine-color-body)">
      <Avatar
        src={currentUser?.profile_pic}
        size={120}
        radius={120}
        mx="auto"
      />
      <Text ta="center" fz="lg" fw={500} mt="md">
        {currentUser?.name}
      </Text>
      <Text ta="center" c="dimmed" fz="sm">
        {currentUser?.email}
      </Text>

      <Button variant="default" fullWidth mt="md">
        Send message
      </Button>
    </Paper>
  )
}
