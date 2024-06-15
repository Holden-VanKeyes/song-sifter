import React, { useState, useEffect } from 'react'
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
} from '@mantine/core'
import { useForm, isNotEmpty } from '@mantine/form'
import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
  IconEye,
  IconFileZip,
  IconTrash,
} from '@tabler/icons-react'
import { images } from '../../constants/constants'
import { imageCardArray } from '../../constants/constants'

export default function CreationForm() {
  const [value, setValue] = useState<string | null>('')
  const [stepper, setStepper] = useState(0)

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      enigma: '',
      lyric: '',
      chord: '',
    },
    onValuesChange: (values) => {
      // ✅ This will be called on every form values change
      //   console.log('VVV', values)
    },

    // validate: {
    //   enigma: isNotEmpty('Please Make A Selection'),
    //   lyric: isNotEmpty('Please Make A Selection'),
    // },
  })

  const handleSubmit = () => {
    // e.preventDefault()
    console.log('VALs', form.getValues())
  }

  return (
    <Container m="md">
      <form
        onSubmit={form.onSubmit(() => {
          handleSubmit()
        })}
      >
        <Card withBorder shadow="sm" radius="md" mb="sm">
          <Card.Section withBorder inheritPadding py="xs">
            <Group justify="space-between">
              <Text fw={500}>{imageCardArray[stepper].title}</Text>
            </Group>
          </Card.Section>

          <Text mt="sm" c="dimmed" size="sm">
            {imageCardArray[stepper].description}
          </Text>
          <Card.Section withBorder inheritPadding py="xs">
            <Select
              placeholder={`choose your ${imageCardArray[stepper].type} category`}
              key={form.key(imageCardArray[stepper].type)}
              {...form.getInputProps(imageCardArray[stepper].type)}
              data={
                Object.entries(imageCardArray[stepper].categories)
                  .flatMap(([k, v]) => {
                    if (k === 'name' || v === null) {
                      return
                    } else return v
                  })
                  .filter((item) => item !== undefined) as string[]
              }
            />
          </Card.Section>
          <Card.Section mt="sm">
            <Image src={imageCardArray[stepper].imgUrl} />
          </Card.Section>
        </Card>

        <Group justify="center" style={{ justifyContent: 'space-around' }}>
          <ActionIcon
            disabled={stepper === 0 ? true : false}
            onClick={() => setStepper(stepper - 1)}
          >
            <IconChevronLeft />
          </ActionIcon>
          <ActionIcon
            disabled={stepper === 2 ? true : false}
            onClick={() => setStepper(stepper + 1)}
          >
            <IconChevronRight />
          </ActionIcon>
        </Group>
        {stepper === 2 ? (
          <Group justify="center" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        ) : null}
      </form>
    </Container>
  )
}
