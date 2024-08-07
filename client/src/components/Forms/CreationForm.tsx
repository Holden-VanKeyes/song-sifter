import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from 'src/global/UserContext'
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
  Center,
  Flex,
  Alert,
  Modal,
  Title,
} from '@mantine/core'
import { useForm, isNotEmpty } from '@mantine/form'
import {
  IconChevronLeft,
  IconChevronRight,
  IconDots,
  IconEye,
  IconFileZip,
  IconTrash,
  IconScanEye,
  IconMicrophone2,
  IconPlaylist,
} from '@tabler/icons-react'
import { images } from '../../constants/constants'
import { imageCardArray } from '../../constants/constants'
import CustomModal from '../CustomModal'
import InspirationModal from '../InspirationModal'
import PleaseLogin from '../PleaseLogin'

export interface InspirationObjectProps {
  author: string
  category: string
  id: number
  title: string
  description: string
  inspirations?: []
}

export default function CreationForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      enigma: '',
      lyrics: '',
      chords: '',
    },
    onValuesChange: (values) => {
      // ✅ This will be called on every form values change
    },

    validate: {
      enigma: isNotEmpty('Please Make A Selection'),
      lyrics: isNotEmpty('Please Make A Selection'),
      chords: isNotEmpty('Please Make A Selection'),
    },
  })
  const { currentUser } = useContext(UserContext)
  const [openModal, setOpenModal] = useState(false)
  const [stepper, setStepper] = useState(0)
  const [loginAlert, setLoginAlert] = useState(false)
  const [randomLyric, setRandomLyric] = useState('')
  const [randomChords, setRandomChords] = useState('')
  const [randomSuggestions, setRandomSuggestions] = useState<{}>([])
  const [inspirationObj, setInspirationObj] = useState<
    InspirationObjectProps[]
  >([])

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleCloseAlert = () => setLoginAlert(false)

  const handleSubmit = async () => {
    if (!currentUser) {
      setLoginAlert(true)
    } else {
      form.validate()
      const values = form.getValues()
      const valueClone = {
        ...values,
      }

      setOpenModal(true)

      const [enigmaJson, lyricJson, chordJson] = await Promise.all([
        fetch(`/random_enigma?category=${values.enigma}`).then((res) =>
          res.json()
        ),
        fetch(`/random_lyrics?category=${values.lyrics}`).then((res) =>
          res.json()
        ),
        fetch(`/random_chords?category=${values.chords}`).then((res) =>
          res.json()
        ),
      ])
      const inspoArray = []
      inspoArray.push(enigmaJson, lyricJson, chordJson)
      valueClone.enigma = enigmaJson.enigma
      valueClone.lyrics = lyricJson.lyrics
      valueClone.chords = chordJson.chords

      const returnedSuggestions = Object.entries(valueClone).map(([k, v]) => ({
        title: k,
        value: v,
      }))

      setRandomSuggestions(returnedSuggestions)
      setInspirationObj(inspoArray)

      // setRandomEnigma(enigmaJson.enigma)
      // setRandomLyric(lyricJson.lyrics)
      // setRandomChords(chordJson.chords)
    }
  }

  const handleNextStep = () => {
    return form.validateField(imageCardArray[stepper].type).hasError
      ? null
      : setStepper(stepper + 1)
  }

  return (
    <Flex justify="center" align="center">
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
              {/* TODO - refactor now that null is not in constant Object */}
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
                Create
              </Button>
            ) : null}
            <ActionIcon
              variant="outline"
              size="lg"
              color="rgba(68, 196, 242, 0.96)"
              disabled={stepper === 2 ? true : false}
              onClick={() => {
                handleNextStep()
              }}
            >
              <IconChevronRight />
            </ActionIcon>
          </Group>
        </form>
        <InspirationModal
          openModal={openModal}
          handleClose={handleCloseModal}
          inspirationObj={inspirationObj}
        />
      </Container>

      <PleaseLogin
        loginAlert={loginAlert}
        handleCloseAlert={handleCloseAlert}
      />
    </Flex>
  )
}
