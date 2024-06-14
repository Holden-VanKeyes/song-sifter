import React, { useState } from 'react'
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
} from '@mantine/core'
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react'
import { images } from '../../constants/constants'
import { imageCardArray } from '../../constants/constants'

export default function CreationForm() {
  const [value, setValue] = useState('')
  return (
    <Container m="md">
      {imageCardArray.map((item, indx) => (
        <Card withBorder shadow="sm" radius="md" key={indx} mb="sm">
          <Card.Section withBorder inheritPadding py="xs">
            <Group justify="space-between">
              <Text fw={500}>{item.title}</Text>
              <NativeSelect
                value={value}
                // inputSize="100"
                onChange={(event) => setValue(event.currentTarget.value)}
                data={['React', 'Angular', 'Svelte', 'Vue']}
              />
              {/* <Menu withinPortal position="bottom-end" shadow="sm">
                <Menu.Target>
                  <ActionIcon variant="subtle" color="gray">
                    <IconDots style={{ width: rem(16), height: rem(16) }} />
                  </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={
                      <IconFileZip
                        style={{ width: rem(14), height: rem(14) }}
                      />
                    }
                  >
                    Download zip
                  </Menu.Item>
                  <Menu.Item
                    leftSection={
                      <IconEye style={{ width: rem(14), height: rem(14) }} />
                    }
                  >
                    Preview all
                  </Menu.Item>
                  <Menu.Item
                    leftSection={
                      <IconTrash style={{ width: rem(14), height: rem(14) }} />
                    }
                    color="red"
                  >
                    Delete all
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu> */}
            </Group>
          </Card.Section>

          <Text mt="sm" c="dimmed" size="sm">
            {item.description}
          </Text>

          <Card.Section mt="sm">
            <Image src={item.imgUrl} />
          </Card.Section>
        </Card>
      ))}
    </Container>
  )
}
