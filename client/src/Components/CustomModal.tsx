import React from 'react'
import { Modal, Button } from '@mantine/core'

interface CustomModalProps {
  openModal: boolean
  handleClose: () => void
  title?: string
  buttonOptions?: string[]
  textContentOptions?: string[]
}

export default function CustomModal({
  openModal,
  handleClose,
  title,
  buttonOptions,
  textContentOptions,
}: CustomModalProps) {
  return (
    <>
      <Modal
        opened={openModal}
        onClose={handleClose}
        title={title ? title : null}
        transitionProps={{
          transition: 'fade',
          duration: 600,
          timingFunction: 'linear',
        }}
      >
        Test
        {buttonOptions
          ? buttonOptions.map((btn) => <Button>{`${btn}`}</Button>)
          : null}
      </Modal>
    </>
  )
}
