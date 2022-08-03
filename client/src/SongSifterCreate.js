import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InspirationPopUp from './InspirationPopUp'
import { useNavigate } from 'react-router-dom'

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

  async function handleCreate() {
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
      .then((data) => {
        console.log(data)
      })

    navigate('/UserProfile')
    // setShow(false)
  }
  console.log(randomEnigma)

  return (
    <div>
      <InspirationPopUp
        showPopUp={show}
        handleClose={handleClose}
        handleSave={handleSave}
        handleInspoName={handleInspoName}
        // randomEnigma={randomEnigma === '' ? false : randomEnigma.enigma}
        randomChords={randomChords.chords}
        randomEnigma={randomEnigma.enigma}
        randomLyric={randomLyric.lyrics}
      />
      <Form>
        <Container>
          <div
            id="inspiration-box"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Row>
              <Col>
                <Card className="card h-100" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="" />

                  <Card.Body>
                    <Card.Title>Chords</Card.Title>
                    <Card.Text>
                      A suggested 4-chord progression based on mood selection
                    </Card.Text>

                    <Form.Select
                      variant="primary"
                      // id="dropdown-basic-button"
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
                <Card className="card h-100" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="" />

                  <Card.Body>
                    <Card.Title>Enigmatic Expressions</Card.Title>
                    <Card.Text>
                      Ways to get you think outside of the box based musically
                      speaking
                    </Card.Text>
                    <Form.Select
                      variant="primary"
                      // id="dropdown-basic-button"
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
                <Card className="card h-100" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="" />

                  <Card.Body>
                    <Card.Title>Lyrics</Card.Title>
                    <Card.Text>
                      Lyric snippets based on a style to help you get started
                      writing
                    </Card.Text>
                    <Form.Select
                      variant="primary"
                      // id="dropdown-basic-button"
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
            {chordSelect === '' ||
            enigmaSelect === '' ||
            lyricSelect === '' ? null : (
              <Button
                variant="primary"
                type="submit"
                id="form-btn"
                onClick={handleCreate}
                // onClick={handleSave}
              >
                Create
              </Button>
            )}
          </div>
        </Container>
      </Form>
    </div>
  )
}

export default SongSifterCreate
