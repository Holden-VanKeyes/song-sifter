import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InspirationPopUp from './InspirationPopUp'
import { useNavigate } from 'react-router-dom'
import { images } from '../constants/constants'

function SongSifterCreate({ currentUser }) {
  const [chordSelect, setChordSelect] = useState('')
  const [enigmaSelect, setEnigmaSelect] = useState('')
  const [lyricSelect, setLyricSelect] = useState('')
  const [show, setShow] = useState(false)

  const [randomEnigma, setRandomEnigma] = useState('')
  const [randomLyric, setRandomLyric] = useState('')
  const [randomChords, setRandomChords] = useState('')
  const [inspirationName, setInspirationName] = useState('')

  const navigate = useNavigate()

  function handleChordSelection(e) {
    setChordSelect(e.target.value)
  }
  function handleEnigmaSelection(e) {
    setEnigmaSelect(e.target.value)
  }
  function handleLyricSelection(e) {
    setLyricSelect(e.target.value)
  }

  async function handleCreate(e) {
    e.preventDefault()
    const [enigmaJson, lyricJson, chordJson] = await Promise.all([
      fetch(`/random_enigma?category=${enigmaSelect}`).then((res) =>
        res.json()
      ),
      fetch(`/random_lyrics?category=${lyricSelect}`).then((res) => res.json()),
      fetch(`/random_chords?category=${chordSelect}`).then((res) => res.json()),
    ])

    setRandomEnigma(enigmaJson)
    setRandomLyric(lyricJson)
    setRandomChords(chordJson)
    setShow(true)
  }

  const handleClose = () => {
    setChordSelect('')
    setEnigmaSelect('')
    setLyricSelect('')
    setShow(false)
  }

  function handleInspoName(e) {
    setInspirationName(e.target.value)
  }

  async function handleSave() {
    console.log(currentUser)
    const newInspiration = {
      title: inspirationName,
      user_id: currentUser.id,
      chord_progression_id: randomChords.id,
      enigma_id: randomEnigma.id,
      lyric_snippet_id: randomLyric.id,
    }

    await fetch('/inspirations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newInspiration),
    })
      .then((response) => response.json())
      .then((data) => {})

    navigate('/UserProfile')
  }

  return (
    <div
      className="create-page"
      style={{
        backgroundImage: `url(${images.Chord})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw 100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        paddingTop: '90px',
      }}
    >
      <InspirationPopUp
        showPopUp={show}
        handleClose={handleClose}
        handleSave={handleSave}
        handleInspoName={handleInspoName}
        randomChords={randomChords.chords}
        randomEnigma={randomEnigma.enigma}
        randomLyric={randomLyric.lyrics}
      />
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          id="inspiration-box"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Row className="inspo-cards">
            <Col>
              <Card
                className="card h-100"
                style={{
                  width: '18rem',
                  background: 'linear-gradient(#F8DDDD, #A1FCDF)',
                }}
              >
                <Card.Img variant="top" src="" />

                <Card.Body>
                  <Card.Title>Chords</Card.Title>
                  <Card.Text>
                    A suggested 4-chord progression based on mood selection
                  </Card.Text>

                  <Form.Select
                    variant="primary"
                    title="Chords"
                    onChange={handleChordSelection}
                    value={chordSelect}
                  >
                    <option disabled={true} value="">
                      -- Chord Moods --
                    </option>
                    <option
                      value="uplifting - ebulient - lighthearted"
                      placeholder="TEST"
                    >
                      Uplifting - Ebulient - Lighthearted
                    </option>
                    <option value="brooding - dark - mysterious">
                      Brooding - Dark - Mysterious
                    </option>
                    <option value="angular - odd - atmospheric">
                      Angular - Odd - Atmospheric
                    </option>
                  </Form.Select>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card h-100"
                style={{
                  width: '18rem',
                  background: 'linear-gradient(#F8DDDD, #A1FCDF)',
                }}
              >
                <Card.Img variant="top" src="" />

                <Card.Body>
                  <Card.Title>Enigmatic Expressions</Card.Title>
                  <Card.Text>
                    Ways to get you think outside of the box musically speaking
                  </Card.Text>
                  <Form.Select
                    variant="primary"
                    title="Enigma"
                    onChange={handleEnigmaSelection}
                    value={enigmaSelect}
                    required
                  >
                    <option disabled={true} value="">
                      -- Enigma Categories --
                    </option>
                    <option value="on production/arrangement">
                      On production/arrangement
                    </option>
                    <option value="on melodic/harmonic/tonal elements">
                      On melodic/harmonic/tonal elements
                    </option>
                    <option value="random">Random</option>
                  </Form.Select>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="card h-100"
                style={{
                  width: '18rem',
                  background: 'linear-gradient(#F8DDDD, #A1FCDF)',
                }}
              >
                <Card.Img variant="top" src="" />

                <Card.Body>
                  <Card.Title>Lyrics</Card.Title>
                  <Card.Text>
                    Lyric snippets based on a style to help you get started
                    writing
                  </Card.Text>
                  <Form.Select
                    variant="primary"
                    title="Lyric"
                    onChange={handleLyricSelection}
                    value={lyricSelect}
                    required
                  >
                    <option disabled={true} value="">
                      -- Lyric Styles --
                    </option>
                    <option value="observational - worldly - nomadic">
                      Observational - Worldly - Nomadic
                    </option>
                    <option value="hopeful - elevated - serene">
                      Hopeful - Elevated - Serene
                    </option>
                    <option value="boozy - despondent - lovelorn">
                      Boozy - Despondent - Lovelorn
                    </option>
                    <option value="abstract - esoteric - uneven">
                      Abstract - Esoteric - Uneven
                    </option>
                  </Form.Select>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        {chordSelect === '' ||
        enigmaSelect === '' ||
        lyricSelect === '' ? null : (
          <Button
            style={{ margin: 'auto' }}
            variant="primary"
            type="submit"
            onClick={handleCreate}
          >
            Create
          </Button>
        )}
      </Form>
    </div>
  )
}

export default SongSifterCreate
