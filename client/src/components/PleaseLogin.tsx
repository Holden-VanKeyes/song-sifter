import React from 'react'
import { Title, Modal } from '@mantine/core'

interface PleaseLoginProps {
  loginAlert: boolean
  handleCloseAlert: () => void
}
export default function PleaseLogin({
  loginAlert,
  handleCloseAlert,
}: PleaseLoginProps) {
  return (
    <Modal
      centered
      opened={loginAlert}
      onClose={() => handleCloseAlert()}
      withCloseButton={false}
    >
      <Title ta="center" order={3}>
        Please Login
      </Title>
    </Modal>
  )
}
