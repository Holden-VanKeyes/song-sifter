import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function CategorySelector() {
  return (
    <div className="container-2">
      <Form>
        <Container>
          <div id="inspiration-box">
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
                      title="Chords"
                      //   onChange={handleChordSelection}
                      //   value={chordSelect}
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
                      title="Enigma"
                      //   onChange={handleEnigmaSelection}
                      //   value={enigmaSelect}
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
                    <Form.Select variant="primary" title="Lyric">
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
        </Container>
      </Form>
    </div>
  )
}

export default CategorySelector
