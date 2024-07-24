import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from 'src/global/UserContext'
import { Avatar, Text, Button, Paper, Box } from '@mantine/core'
import { SavedInspos } from './SavedInspos'

export default function UserProfile() {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      <Paper radius="md" p="lg" bg="var(--mantine-color-body)" mb="xl" mt="sm">
        <Avatar
          src={currentUser?.profile_pic}
          size={120}
          radius={120}
          mx="auto"
        />
        <Text ta="center" fz="lg" fw={500} mt="md">
          {currentUser?.username}
        </Text>
        <Text ta="center" c="dimmed" fz="sm">
          {currentUser?.email}
        </Text>

        <Button variant="default" fullWidth mt="md">
          Send message
        </Button>
      </Paper>
      <Box m="md">
        <SavedInspos />
      </Box>
    </>
  )
}
