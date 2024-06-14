import React, { useState } from 'react'

import { images } from './constants/constants'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Badge } from '@mantine/core'

function SplashPage({ showOffset, setShowOffset }) {
  console.log('OFF', showOffset, setShowOffset)
  const [lyricHover, setLyricHover] = useState(false)
  const [enigmaHover, setEnigmaHover] = useState(false)
  const [chordHover, setChordHover] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  const handleLyricHover = () => {
    setLyricHover(true)
  }
  const handleLyricMouseOut = () => {
    setLyricHover(false)
  }

  const handleEnigmaHover = () => {
    setEnigmaHover(true)
  }
  const handleEnigmaMouseOut = () => {
    setEnigmaHover(false)
  }
  const handleChordHover = () => {
    setChordHover(true)
  }
  const handleChordMouseOut = () => {
    setChordHover(false)
  }

  const handleShowAbout = () => {
    setShowAbout(true)
  }
  const closeAbout = () => {
    setShowAbout(false)
  }

  return (
    <>
      <div
        className="splash-page"
        style={{
          display: 'flex',
          background:
            'linear-gradient(to right, rgba(55, 174, 190, 0.30), rgba(55, 174, 190, 0.80))',

          alignItems: 'center',

          height: '100vh',
          width: '100vw',
          margin: 'auto',
          paddingTop: '90px',
          paddingLeft: '5px',
          paddingRight: '5px',
        }}
      >
        <Row
          xs={3}
          md={3}
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',

            margin: 'auto',
          }}
        >
          <Col>
            <Figure
              className="position-relative"
              style={{ border: 'solid 5px', borderColor: 'black' }}
            >
              <FigureImage
                alt="singing"
                onMouseOver={handleLyricHover}
                onMouseOut={handleLyricMouseOut}
                onClick={handleShowAbout}
                src={images.Lyric}
                style={{
                  margin: 'auto',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  cursor: 'pointer',
                  opacity: lyricHover ? '50%' : '100%',
                }}
              />

              {lyricHover ? (
                <FigureCaption
                  className="figure-caption"
                  style={{ fontSize: 'large', fontWeight: 'bolder' }}
                >
                  <h2 style={{ textDecoration: 'underline' }}>
                    LYRIC SNIPPETS
                  </h2>
                  Lyrical ideas contributed by other artists snippets based on
                  mood to help jumpstart your writing process
                </FigureCaption>
              ) : null}
            </Figure>
          </Col>
          <Col>
            <Figure
              className="position-relative"
              style={{ border: 'solid 5px', borderColor: 'black' }}
            >
              <FigureImage
                onMouseOver={handleEnigmaHover}
                onMouseOut={handleEnigmaMouseOut}
                onClick={handleShowAbout}
                src={images.Enigma}
                style={{
                  margin: 'auto',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  opacity: enigmaHover ? '50%' : '100%',
                  cursor: 'pointer',
                }}
              />
              {enigmaHover ? (
                <FigureCaption
                  className="figure-caption"
                  style={{ fontSize: 'large', fontWeight: 'bolder' }}
                >
                  <h2 style={{ textDecoration: 'underline' }}>ENIGMAS</h2>
                  Ruminations on production, recording, arrangment, and melodic
                  ideas to help you think outside the musical box
                </FigureCaption>
              ) : null}
            </Figure>
          </Col>
          <Col>
            <Figure
              className="position-relative"
              style={{ border: 'solid 5px', borderColor: 'black' }}
            >
              <FigureImage
                onMouseOver={handleChordHover}
                onMouseOut={handleChordMouseOut}
                onClick={handleShowAbout}
                src={images.Chord}
                style={{
                  margin: 'auto',
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  opacity: chordHover ? '50%' : '100%',
                  cursor: 'pointer',
                }}
              />
              {chordHover ? (
                <FigureCaption
                  className="figure-caption"
                  style={{ fontSize: 'large', fontWeight: 'bolder' }}
                >
                  <h2 style={{ textDecoration: 'underline' }}>
                    CHORD PROGRESSIONS
                  </h2>
                  Build a song around the suggested 4-chord progression based on
                  category type
                </FigureCaption>
              ) : null}
            </Figure>
          </Col>
        </Row>
        <Offcanvas show={showOffset} onHide={() => setShowOffset(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Song Sifter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Song Sifter was created for musicians, producers, songwriters in
            need of a little creative spark! Hit up the create section to
            generate the following song-starters based on mood/style: A 4-chord
            progression, a lyric snippet, and an enigmatic expression. Insead of
            cycling through to find the perfect fit, we suggest you spend some
            time with the first recommendation as it may help you escape your
            songwriting crutches. You can also send us your own
            lyrics/chords/enigmas to add to our library of inspirations, and if
            you create something musical from your customized inspiration, we
            encourage you to share with the community via the Share page. Log in
            or Sign up to explore more!
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  )
}
export default SplashPage
