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
import CustomModal from '../CustomModal'

export default function CreationForm() {
  const [openModal, setOpenModal] = useState(false)
  const [stepper, setStepper] = useState(0)
  const [randomEnigma, setRandomEnigma] = useState('')
  const [randomLyric, setRandomLyric] = useState('')
  const [randomChords, setRandomChords] = useState('')

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

    validate: {
      enigma: isNotEmpty('Please Make A Selection'),
      lyric: isNotEmpty('Please Make A Selection'),
      chord: isNotEmpty('Please Make A Selection'),
    },
  })

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleSubmit = async () => {
    // e.preventDefault()
    form.validate()
    const values = form.getValues()
    setOpenModal(true)

    // const [enigmaJson, lyricJson, chordJson] = await Promise.all([
    //   fetch(`/random_enigma?category=${values.enigma}`).then((res) =>
    //     res.json()
    //   ),
    //   fetch(`/random_lyrics?category=${values.lyric}`).then((res) =>
    //     res.json()
    //   ),
    //   fetch(`/random_chords?category=${values.chord}`).then((res) =>
    //     res.json()
    //   ),
    // ])

    // console.log('HERE', enigmaJson, lyricJson, chordJson)

    // setRandomEnigma(enigmaJson)
    // setRandomLyric(lyricJson)
    // setRandomChords(chordJson)
    // const newInspiration = {
    //     title: inspirationName,
    //     user_id: currentUser.id,
    //     chord_progression_id: randomChords.id,
    //     enigma_id: randomEnigma.id,
    //     lyric_snippet_id: randomLyric.id,
    //   }

    //   await fetch('/inspirations', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newInspiration),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {})

    //   navigate('/UserProfile')
  }

  const handleNextStep = (direction: string) => {
    return form.validateField(imageCardArray[stepper].type).hasError
      ? null
      : setStepper(direction === 'forward' ? stepper + 1 : stepper - 1)
    // form.validateField('lyric')
    console.log('VALs', form.validateField(imageCardArray[stepper].type))
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

          <Text py="xs" c="dimmed" size="sm">
            {imageCardArray[stepper].description}
          </Text>
          <Card.Section inheritPadding>
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

        <Group
          justify="center"
          style={{ justifyContent: 'space-between' }}
          mt="lg"
        >
          <ActionIcon
            variant="outline"
            size="lg"
            color="rgba(68, 196, 242, 0.96)"
            disabled={stepper === 0 ? true : false}
            onClick={() => setStepper(stepper - 1)}
          >
            <IconChevronLeft />
          </ActionIcon>
          {stepper === 2 ? (
            <Button type="submit" color="cyan" variant="outline">
              Submit
            </Button>
          ) : null}
          <ActionIcon
            variant="outline"
            size="lg"
            color="rgba(68, 196, 242, 0.96)"
            disabled={stepper === 2 ? true : false}
            onClick={() => {
              handleNextStep('forward')
            }}
          >
            <IconChevronRight />
          </ActionIcon>
        </Group>
      </form>
      <CustomModal
        openModal={openModal}
        handleClose={handleCloseModal}
        title="Your Unique Musical Inspiration"
        buttonOptions={['Discard', 'Save']}
        textContentOptions={[randomEnigma, randomLyric, randomChords]}
      />
    </Container>
  )
}
