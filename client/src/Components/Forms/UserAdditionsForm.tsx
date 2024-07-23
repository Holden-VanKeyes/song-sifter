import React, { useState } from 'react'
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
  Flex,
} from '@mantine/core'
import css from '../UserAdditions.module.css'

interface ChoicesProps {
  choices: string[]
  type?: string
}

export default function UserAdditionsForm({ choices }: ChoicesProps) {
  const [checked, setChecked] = useState(false)
  return (
    <Container m="lg" pt="md">
      <Stack mt="xl">
        {choices.map((category: string, indx: number) => {
          const splitString = category.split('-')
          console.log('HERE', splitString)
          return (
            <div key={indx}>
              <Group wrap="nowrap">
                <Radio
                  iconColor="dark.8"
                  color="cyan.2"
                  //   label="Custom icon color"
                  name="selection"
                  checked={checked}
                  // defaultChecked
                  onChange={(e) => setChecked(e.currentTarget.checked)}
                />
                <Avatar
                  src={`https://api.dicebear.com/9.x/shapes/svg?seed=${category}`}
                  size={94}
                  radius="md"
                />
                <Flex direction="column">
                  {splitString.map((item) => (
                    <Text fz="xs" tt="uppercase" fw={700}>
                      {item}
                    </Text>
                  ))}
                </Flex>
                {/* <div>
                  <Text fz="xs" tt="uppercase" fw={700}>
                    {category.split('-')}
                  </Text>
                </div> */}
              </Group>
            </div>
          )
        })}
        <Textarea
          label="Input label"
          description="Input description"
          placeholder="Input placeholder"
        />
      </Stack>
    </Container>
  )
}
